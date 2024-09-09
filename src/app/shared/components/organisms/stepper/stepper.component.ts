import {
  Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentRef, AfterViewInit,
  Input, OnChanges, SimpleChanges, Injector, EventEmitter, Output, ChangeDetectorRef
} from '@angular/core';
import { DYNAMIC_DATA } from '../../../../core/tokens/dynamic-data.token';
import { DoctorPublic } from '../../../../core/models/doctor.model';
import { Patient } from '../../../../core/models/patient.model';
import { AuthService } from '../../../../core/service/auth-service.service';
import { StepperService } from '../../../../core/service/stepper.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements AfterViewInit, OnChanges {
  @ViewChild('dynamicContent', { read: ViewContainerRef }) dynamicContent!: ViewContainerRef;
  @Input() steps: { label: string, component: any, data?: any }[] = [];
  @Input() doctor!: DoctorPublic;
  @Input() patient!: Patient;
  @Output() onComponentRendered = new EventEmitter<void>(); // Emisor para cuando el componente se renderiza
  currentStepIndex: number = 0;
  canProceed: boolean = true;
  componentRef!: ComponentRef<any>;
  userRole: string = '';
  private canProceedSubscription!: Subscription;
  private submitStepSubscription!: Subscription;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private stepperService: StepperService
  ) {}

  // Se ejecuta cuando hay cambios en las entradas
  ngOnChanges(changes: SimpleChanges) {
    if (changes['steps'] || changes['doctor'] || changes['patient']) {
      this.loadUserRole(); // Cargar el rol del usuario
      this.loadStepComponent(); // Cargar el componente del paso actual
    }
  }

  // Se ejecuta después de que la vista se haya inicializado
  ngAfterViewInit() {
    this.loadStepComponent(); // Cargar el componente del paso actual
    // Suscribirse a los eventos del stepper
    // this.subscribeToStepperEvents();  // Comentado para no suscribirse a los eventos
  }

  // Suscribirse a los eventos del StepperService
  subscribeToStepperEvents() {
    // Comentado para desactivar el manejo de eventos de "can proceed" y "submit step"
    /*
    this.canProceedSubscription = this.stepperService.canProceed$.subscribe(
      (canProceed: boolean) => {
        this.canProceed = canProceed;
        this.cdr.detectChanges();
      }
    );

    this.submitStepSubscription = this.stepperService.getSubmitStep().subscribe(() => {
      this.submitStep();
    });
    */
  }

  // Cargar el componente del paso actual
  loadStepComponent() {
    if (this.dynamicContent && this.steps.length > 0) {
      this.canProceed = true
      this.dynamicContent.clear();

      const step = this.steps[this.currentStepIndex];
      const componentFactory = this.resolver.resolveComponentFactory(step.component);

      const injector = Injector.create({
        providers: [
          { provide: DYNAMIC_DATA, useValue: { doctor: this.doctor, patient: this.patient } }
        ],
        parent: this.injector
      });

      this.componentRef = this.dynamicContent.createComponent(componentFactory, 0, injector);

      if (step.data) {
        Object.keys(step.data).forEach(key => {
          if (this.componentRef.instance.hasOwnProperty(key)) {
            this.componentRef.instance[key] = step.data[key];
          }
        });
      }

      // Comentado para desactivar la escucha de eventos de "can proceed"
      /*
      if (this.componentRef.instance.canProceed instanceof EventEmitter) {
        this.componentRef.instance.canProceed.subscribe((canProceed: boolean) => {
          this.stepperService.setCanProceed(canProceed);
        });
      }

      if (this.componentRef.instance.stepConfirmed instanceof EventEmitter) {
        this.componentRef.instance.stepConfirmed.subscribe((status: boolean) => {
          if (status) {
            this.nextStep();
          }
        });
      }
      */

      this.cdr.detectChanges();
      this.onComponentRendered.emit();
    }
  }

  // Enviar el paso actual
  submitStep() {
    this.nextStep(); // Provisionalmente solo avanza al siguiente paso
  }

  // Avanza al siguiente paso sin eventos ni validaciones
  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.canProceed = false; // No depende de validación
      this.loadStepComponent();
    } else if (this.isLastStep()) {
      this.completeProcess();
    }
  }

  // Verificar si es el último paso
  isLastStep(): boolean {
    return this.currentStepIndex === this.steps.length - 1;
  }

  // Cargar el rol del usuario desde el AuthService
  loadUserRole(): void {
    this.authService.getUserRole().subscribe(
      (role: string) => {
        this.userRole = role;
      },
      (error: any) => {
        console.error('Error getting user role:', error);
      }
    );
  }

  // Completar el proceso
  completeProcess() {
    Swal.fire({
      icon: 'success',
      title: 'Proceso completado',
      text: 'Has completado todos los pasos.',
    }).then(() => {
      this.cleanLocalStorage();
      this.router.navigate(['/some-completed-page']);
    });
  }

  // Limpiar datos del LocalStorage
  cleanLocalStorage() {
    localStorage.removeItem('someItem1');
    localStorage.removeItem('someItem2');
    console.log('LocalStorage cleaned');
  }

  // Limpiar las suscripciones al destruir el componente
  ngOnDestroy() {
    // No es necesario limpiar suscripciones ya que están comentadas
    /*
    if (this.canProceedSubscription) this.canProceedSubscription.unsubscribe();
    if (this.submitStepSubscription) this.submitStepSubscription.unsubscribe();
    */
  }
}

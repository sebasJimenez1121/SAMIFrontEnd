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
  @Output() onComponentRendered = new EventEmitter<void>();
  currentStepIndex: number = 0;
  canProceed: boolean = false;
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['steps'] || changes['doctor'] || changes['patient']) {
      this.loadUserRole();
      this.loadStepComponent();
    }
  }

  ngAfterViewInit() {
    this.loadStepComponent();
    this.subscribeToStepperEvents();
  }

  // Subscribe to service events
  subscribeToStepperEvents() {
    this.canProceedSubscription = this.stepperService.canProceed$.subscribe(
      (canProceed: boolean) => {
        this.canProceed = canProceed;
        this.cdr.detectChanges();  // Ensure view updates
      }
    );

    this.submitStepSubscription = this.stepperService.getSubmitStep().subscribe(() => {
      this.submitStep();  // Trigger the submit action when service emits it
    });
  }

  loadStepComponent() {
    if (this.dynamicContent && this.steps.length > 0) {
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

      if (this.componentRef.instance.canProceed instanceof EventEmitter) {
        this.componentRef.instance.canProceed.subscribe((canProceed: boolean) => {
          this.stepperService.setCanProceed(canProceed);  // Emit canProceed to service
        });
      }

      if (this.componentRef.instance.stepConfirmed instanceof EventEmitter) {
        this.componentRef.instance.stepConfirmed.subscribe((status: boolean) => {
          if (status) {
            this.nextStep();  // Proceed only when step is confirmed
          }
        });
      }

      this.cdr.detectChanges();
      this.onComponentRendered.emit();
    }
  }

  submitStep() {
    this.stepperService.emitSubmitStep();  // Emit submit to current step
  }

  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.canProceed = false;
      this.loadStepComponent();
    } else if (this.isLastStep()) {
      this.completeProcess();
    }
  }

  isLastStep(): boolean {
    return this.currentStepIndex === this.steps.length - 1;
  }

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

  cleanLocalStorage() {
    localStorage.removeItem('someItem1');
    localStorage.removeItem('someItem2');
    console.log('LocalStorage cleaned');
  }

  resetStepper() {
    this.currentStepIndex = 0;
    this.canProceed = false;
    this.loadStepComponent();
    console.log('Stepper reset');
  }

  handleExit() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Si sales, se perderán los datos actuales.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/inicio']);
      }
    });
  }

  ngOnDestroy() {
    if (this.canProceedSubscription) this.canProceedSubscription.unsubscribe();
    if (this.submitStepSubscription) this.submitStepSubscription.unsubscribe();
  }
}

import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ComponentRef, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  animations: [
    trigger('stepChange', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ]),
    ]),
  ]
})
export class StepperComponent implements OnInit, AfterViewInit {
  @ViewChild('dynamicContent', { read: ViewContainerRef }) dynamicContent!: ViewContainerRef;

  @Input() steps: { label: string, component: any, data?: any }[] = [];

  currentStepIndex: number = 0;
  canProceed: boolean = true;
  private componentRef!: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver, private router: Router) {}

  ngOnInit() {
    this.currentStepIndex = 0; // Asegura que siempre se inicia en el primer paso
  }

  ngAfterViewInit() {
    this.loadComponent(); // Cargar el primer componente después de que la vista esté inicializada
  }

  loadComponent() {
    if (!this.dynamicContent) {
      console.error('ViewContainerRef dynamicContent is not initialized');
      return;
    }

    this.dynamicContent.clear();

    const step = this.steps[this.currentStepIndex];
    const factory = this.resolver.resolveComponentFactory(step.component);
    this.componentRef = this.dynamicContent.createComponent(factory);

    if (step.data) {
      Object.assign(this.componentRef.instance, step.data);
    }

    if (this.componentRef.instance.onComponentLoaded) {
      this.componentRef.instance.onComponentLoaded();
    }
  }

  nextStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.loadComponent();
    }
  }

  selectStep(index: number) {
    this.currentStepIndex = index;
    this.loadComponent();
  }

  handleExit() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, exit!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/agendar-cita']); // Ajusta a tu ruta anterior
      }
    });
  }
}

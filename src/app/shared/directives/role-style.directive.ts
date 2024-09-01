import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appRoleStyle]'
})
export class RoleStyleDirective implements OnChanges {
  @Input() appRoleStyle: string = '';
  @Input() adminClass: string = 'admin';
  @Input() patientClass: string = 'paciente';
  @Input() doctorClass: string = 'medico';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appRoleStyle']) {
      this.updateStyle(changes['appRoleStyle'].currentValue);
    }
  }

  private updateStyle(role: string) {
    // Limpiamos todas las clases existentes
    this.removeClass(this.adminClass);
    this.removeClass(this.patientClass);
    this.removeClass(this.doctorClass);

    // Agregamos la clase correspondiente al rol actual
    if (role === 'admin') {
      this.addClass(this.adminClass);
    } else if (role === 'paciente') {
      this.addClass(this.patientClass);
    } else if (role === 'medico') {
      this.addClass(this.doctorClass);
    }
  }

  private addClass(className: string) {
    if (className) {
      this.renderer.addClass(this.el.nativeElement, className);
    }
  }

  private removeClass(className: string) {
    if (className) {
      this.renderer.removeClass(this.el.nativeElement, className);
    }
  }
}

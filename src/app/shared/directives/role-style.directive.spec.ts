import { RoleStyleDirective } from './role-style.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('RoleStyleDirective', () => {
  it('should create an instance', () => {
    // Mock ElementRef and Renderer2
    const elementRef = {} as ElementRef;
    const renderer = {} as Renderer2;

    // Create an instance of RoleStyleDirective with mock dependencies
    const directive = new RoleStyleDirective(elementRef, renderer);

    // Assert that directive is truthy (i.e., it was successfully created)
    expect(directive).toBeTruthy();
  });
});

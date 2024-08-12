import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-buttons',
  templateUrl: './set-buttons.component.html',
  styleUrls: ['./set-buttons.component.css']
})
export class SetButtonsComponent {

  constructor(private router: Router) {}

  handleLoginClick() {
    this.router.navigate(['/login']);
  }

  handleRegisterClick() {
    this.router.navigate(['/register']);
  }
}

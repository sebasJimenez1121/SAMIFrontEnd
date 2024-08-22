import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../core/service/auth-service.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  @Input() width: string = '20rem';

  constructor(
   
    private authService: AuthService,
    private router: Router
  ) {}
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }}

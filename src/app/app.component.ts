// app.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/core/service/auth-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SAMI'
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.fetchUserRole(2).subscribe(role => {
      this.authService.setUserRole(role);
    });
  }
}

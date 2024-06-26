import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/core/service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SAMI';

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.fetchNewToken(1);
  }

  fetchNewToken(userId: number) {
    this.authService.fetchToken(userId).subscribe(() => {
    });
  }

  logout() {
    this.authService.logout();
  }
}

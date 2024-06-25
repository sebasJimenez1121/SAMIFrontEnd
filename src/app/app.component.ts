import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/core/service/auth-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SAMI';
  isSidebarClosed = false;
  useRole : any = "";

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.fetchUserRole(1).subscribe(role => {
      this.authService.setUserRole(role);
    });
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}

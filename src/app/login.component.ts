import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login(): void {
    const credentials = { username: this.username, password: this.password };
    this.apiService.login(credentials).subscribe(() => {
      this.router.navigate(['/']);
    }, error => {
      console.error('Error al iniciar sesión:', error);
    });
  }
}

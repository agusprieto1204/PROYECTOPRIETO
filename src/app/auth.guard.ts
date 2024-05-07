import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false; 

  constructor() { }

  isAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  login(username: string, password: string): void {
    if (username === 'usuario' && password === 'contraseña') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}

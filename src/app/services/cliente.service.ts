import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Pérez',
      correo: 'juan.perez@email.com',
      telefono: '123456789',
      entrada: 'Fiesta 1'
    },
    {
      id: 2,
      nombre: 'María',
      apellido: 'López',
      correo: 'maria.lopez@email.com',
      telefono: '987654321',
      entrada: 'Fiesta 2'
    },
    {
      id: 3,
      nombre: 'Juan',
      apellido: 'López',
      correo: 'juan.lopezzz@email.com',
      telefono: '5987458',
      entrada: 'Fiesta 2'
    },
    {
      id: 4,
      nombre: 'Jesus',
      apellido: 'chila',
      correo: 'chila.jesus@email.com',
      telefono: '987654321',
      entrada: 'Fiesta 1'
    },
    {
      id: 5,
      nombre: 'agus',
      apellido: 'fernandez',
      correo: 'fer.agus@email.com',
      telefono: '987654321',
      entrada: 'Fiesta 2'
    }
  ];

  constructor() { }

  getClientes(): Cliente[] {
    return this.clientes;
  }

  addCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  updateCliente(cliente: Cliente): void {
    const index = this.clientes.findIndex(c => c.id === cliente.id);
    if (index !== -1) {
      this.clientes[index] = cliente;
    }
  }

  deleteCliente(id: number): void {
    this.clientes = this.clientes.filter(c => c.id !== id);
  }

  getClientesObservable(): Observable<Cliente[]> {
    return of(this.clientes);
  }
}

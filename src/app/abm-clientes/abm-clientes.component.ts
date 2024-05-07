import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.models';
import { ClientesService } from '../services/cliente.service';

export class AbmClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  cliente: Cliente = {} as Cliente;  
  mensaje: string = '';  

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
  }

  agregarOActualizarCliente(): void {
    if (!this.cliente.id) {
      this.clientesService.addCliente(this.cliente);
      this.mensaje = 'Cliente agregado con éxito';
    } else {
      this.clientesService.updateCliente(this.cliente);
      this.mensaje = 'Cliente actualizado con éxito';
    }
    this.cliente = {} as Cliente;
    this.clientes = this.clientesService.getClientes();
  }

  eliminarCliente(id: number): void {
    this.clientesService.deleteCliente(id);
    this.clientes = this.clientesService.getClientes();
    this.mensaje = 'Cliente eliminado con éxito';
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Cliente } from './models/cliente.models';
import { ClientesService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  clientes: Cliente[] = [];
  clientesSubscription: Subscription;
  searchText: string = '';

  constructor(private fb: FormBuilder, private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      mail: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.pattern(/^[0-9]*$/)]
    });

    this.clientesSubscription = this.clienteService.getClientesObservable().subscribe(data => {
      this.clientes = data;
    });
  }

  ngOnDestroy(): void {
    if (this.clientesSubscription) {
      this.clientesSubscription.unsubscribe();
    }
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}

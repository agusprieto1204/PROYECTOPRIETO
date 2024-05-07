import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprasFormato'
})
export class ComprasFormatoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!Array.isArray(value)) {
      return null;
    }
    return value.map(persona => `${persona.nombre} - Compras: ${persona.entradas} - Gasto: ${persona.gasto}`);
  }
}

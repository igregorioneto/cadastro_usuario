import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string):string {
    return value.replace( /(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4');
    // return `${value.substr(0,3)}.${value.substr(3,3)}.${value.substr(6,3)}-${value.substr(9)}`;
  }

}

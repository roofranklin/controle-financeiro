import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email',
  standalone: true
})
export class EmailPipe implements PipeTransform {

  transform(value: string): string {
    return value + "@minhaempresa.com.br";
  }
}

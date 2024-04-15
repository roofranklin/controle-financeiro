import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'data',
  standalone: true
})
export class DataPipe implements PipeTransform {

  transform(value: any, format: string = 'dd/MM/yyyy HH:mm'): any {
    const dataPipe = new DatePipe('en-US');
    return dataPipe.transform(value, format);
  }

}

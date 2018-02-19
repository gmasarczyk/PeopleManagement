import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postalCode'
})
export class  PostalCodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      if (value.length === 5) {
        return value.slice(0, 2) + '-' + value.slice(2);
      } else { return value; }
    }
  }

}

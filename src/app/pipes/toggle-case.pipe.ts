import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toggleCase',
  standalone: true
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, arg: string): string {
    let result: string = value;
    switch (arg) {
      case 'M':
        result = value.toUpperCase();
        break;
      case 'm':
        result = value.toLowerCase();
        break;
    }
    return result;
  }
}

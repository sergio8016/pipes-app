import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: true
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean,): 'Can fly' | 'Can not fly' {
    return value ? 'Can fly' : 'Can not fly';
  }

}

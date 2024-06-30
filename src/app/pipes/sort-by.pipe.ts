import {Pipe, PipeTransform} from '@angular/core';
import {HeroInterface} from "../interfaces/hero.interface";

@Pipe({
  name: 'sortBy',
  standalone: true
})
export class SortByPipe implements PipeTransform {

  transform(heroes: HeroInterface[], sortBy: keyof HeroInterface | null): HeroInterface[] {

    function compare<HeroInterface>(key: keyof HeroInterface) {
      return (a: HeroInterface, b: HeroInterface) => a[key] > b[key] ? 1 : -1;
    }

    switch (sortBy) {
      case 'name':
        return heroes.sort(compare('name'));
      case 'canFly':
        return heroes.sort(compare('canFly'));
      case 'color':
        return heroes.sort(compare('color'));
      default:
        return heroes;
    }
  }

}

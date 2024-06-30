import { Pipe, PipeTransform } from '@angular/core';
import {Color} from "../interfaces/hero.interface";

@Pipe({
  name: 'color',
  standalone: true
})
export class ColorPipe implements PipeTransform {

  transform(value: number): string {

    return Color[value];
  }

}

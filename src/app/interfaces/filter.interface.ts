import {HeroInterface} from "./hero.interface";

export interface FilterInterface {
  label: string;
  style: string;
  value: keyof HeroInterface;
}

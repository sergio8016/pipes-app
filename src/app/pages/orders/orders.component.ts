import {Component} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {ToggleCasePipe} from "../../pipes/toggle-case.pipe";
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {PrimeIcons} from "primeng/api";
import {Color, HeroInterface} from "../../interfaces/hero.interface";
import {TableModule} from "primeng/table";
import {CanFlyPipe} from "../../pipes/can-fly.pipe";
import {SortByPipe} from "../../pipes/sort-by.pipe";
import {FilterInterface} from "../../interfaces/filter.interface";
import {ColorPipe} from "../../pipes/color.pipe";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    PanelModule,
    ToggleCasePipe,
    ToolbarModule,
    Button,
    TableModule,
    CanFlyPipe,
    SortByPipe,
    ColorPipe,
    TitleCasePipe,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  protected readonly PrimeIcons = PrimeIcons;
  public isUpperCase: boolean = false;
  public heroes: HeroInterface[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green arrow',
      canFly: false,
      color: Color.green
    },
  ];
  sortCondition: keyof HeroInterface | null = null;
  sortButtons: FilterInterface[] = [
    {
      label: 'By name',
      style: 'p-button-danger',
      value: 'name'
    },
    {
      label: 'By can fly',
      style: 'p-button-warning',
      value: 'canFly'
    },
    {
      label: 'By color',
      style: 'p-button-info',
      value: 'color'
    },
  ];

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  onFilterButtonCLick(value: keyof HeroInterface): void {
    this.sortCondition = value;
  }
}

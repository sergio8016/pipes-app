import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import {CurrencyPipe, DecimalPipe, PercentPipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [
    CardModule,
    PanelModule,
    UpperCasePipe,
    DecimalPipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.scss'
})
export class NumbersPageComponent {
  public totalSells: number = 35345345.3545
  public percent: number = 0.3545
}

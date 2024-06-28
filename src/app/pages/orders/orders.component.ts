import { Component } from '@angular/core';
import {PanelModule} from "primeng/panel";
import {ToggleCasePipe} from "../../pipes/toggle-case.pipe";
import {ToolbarModule} from "primeng/toolbar";
import {Button} from "primeng/button";
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    PanelModule,
    ToggleCasePipe,
    ToolbarModule,
    Button,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

  protected readonly PrimeIcons = PrimeIcons;
}

import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from "primeng/button";
import {PrimeNGConfig} from "primeng/api";
import {MenuComponent} from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  primeNGConfig: PrimeNGConfig = inject(PrimeNGConfig)

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
    this.primeNGConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlay-panel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
  }
}

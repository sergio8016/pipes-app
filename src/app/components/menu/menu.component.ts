import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";
import {MenubarModule} from "primeng/menubar";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular pipes', icon: PrimeIcons.DESKTOP, items: [
          {
            label: 'Text and Dates',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: 'basics'
          },
          {
            label: 'Numbers',
            icon: PrimeIcons.DOLLAR,
            routerLink: 'numbers'
          },
          {
            label: 'Uncommon',
            icon: PrimeIcons.GLOBE,
            routerLink: 'uncommon'
          },
        ]
      },
      {
        label: 'Custom pipes', icon: PrimeIcons.COG, items: [
          {
            label: 'Other',
            icon: PrimeIcons.COG
          }
        ]
      },
      {
        label: 'Tres', icon: PrimeIcons.EYE
      },
    ]
  }
}

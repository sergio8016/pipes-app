import { Component } from '@angular/core';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss'
})
export class BasicsPageComponent {
  public  nameLower: string = 'sergio';
  public  nameUpper: string = 'SERGIO';
  public  fullName: string = 'sErGio zApATa';
  public customDate: Date = new Date();
}

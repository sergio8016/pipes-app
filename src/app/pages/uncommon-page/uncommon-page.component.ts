import {Component} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {FieldsetModule} from "primeng/fieldset";
import {Button} from "primeng/button";
import {I18nPluralPipe, I18nSelectPipe} from "@angular/common";

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    PanelModule,
    FieldsetModule,
    Button,
    I18nSelectPipe,
    I18nPluralPipe
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {
  public name: string = 'Sergio'
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'guy',
    'female': 'girl'
  }

  public clients: string[] = ['Sergio', 'Omaira', 'Francisco', 'Hassan', 'Mateo', 'Isa', 'Abdullah'];
  public clientsMap: { [k: string]: string } = {
    '=0': 'no clients waiting.',
    '=1': 'client waiting.',
    other: '# clients waiting.'
  }

  onButtonChangeClick() {
    this.name = 'Omaira';
    this.gender = 'female'
  }

  onDeleteClient() {
    this.clients.shift();
  }
}

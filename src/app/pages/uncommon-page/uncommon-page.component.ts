import {Component} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {FieldsetModule} from "primeng/fieldset";
import {Button} from "primeng/button";
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValue,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe
} from "@angular/common";
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    PanelModule,
    FieldsetModule,
    Button,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
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
  };
  public person = {
    name: 'Sergio',
    age: new Date().getFullYear() - 1990,
    address: 'Dark continent'
  }
  public myObservableTimer: Observable<number> = interval(2000);
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3500);
  })

  onButtonChangeClick() {
    this.name = 'Omaira';
    this.gender = 'female'
  }

  onDeleteClient() {
    this.clients.shift();
  }

  originalOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return 0;
  }
}

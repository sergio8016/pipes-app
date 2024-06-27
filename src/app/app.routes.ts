import { Routes } from '@angular/router';
import {BasicsPageComponent} from "./pages/basics-page/basics-page.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'basics',
    pathMatch: 'full'
  },
  {
    path: 'basics',
    loadComponent: () => import('./pages/basics-page/basics-page.component').then(m => m.BasicsPageComponent)
  },
  {
    path: 'numbers',
    loadComponent: () => import('./pages/numbers-page/numbers-page.component').then(m => m.NumbersPageComponent)
  },
  {
    path: 'uncommon',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component').then(m => m.UncommonPageComponent)
  },{
    path: '**',
    redirectTo: ''
  },
];

import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';

import localeEsCol from '@angular/common/locales/es-CO';
import localeArSA from '@angular/common/locales/ar-SA';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEsCol);
registerLocaleData(localeArSA);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimations(),
    {
      provide: LOCALE_ID, useValue: 'es-CO'
    }
  ]
};

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules, RouteReuseStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideIonicAngular({}),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
};

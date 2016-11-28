import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { ROUTER_PROVIDERS } from '@angular/router';


bootstrap(AppComponent,[ROUTER_PROVIDERS]);
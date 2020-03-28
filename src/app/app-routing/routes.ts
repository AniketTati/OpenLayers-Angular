import { Routes } from '@angular/router';

import { MapComponent } from '../map/map.component';
import { Map2Component } from '../map2/map2.component';

export const routes: Routes = [
  { path: 'map',  component: MapComponent },
  { path: 'map2',     component: Map2Component },
  { path: '', redirectTo: '/map', pathMatch: 'full' }
];
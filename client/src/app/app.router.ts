import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'applications',
    component: AppPageComponent
  },
  {
    path: 'applications/:slug/:id',
    component: SinglePageComponent
  },
  {
    path: '**',
    component: Error404PageComponent
  }
];

export const RoutingModule = RouterModule.forRoot(routes);
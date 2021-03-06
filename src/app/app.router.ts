import { Route, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomepageComponent } from './components/homepage/homepage.component'

const routes: Route[] = [
  { path: '', component: HomepageComponent, pathMatch: 'full' }
]

export const appRouting = RouterModule.forRoot(routes, { useHash: true })

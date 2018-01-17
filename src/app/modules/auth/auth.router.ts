import { Route, RouterModule } from '@angular/router'
import { AuthComponent } from './auth.component'

import { AuthGuard } from './services/auth-guard'

const authRoutes: Route[] = [
  { path: 'auth', component: AuthComponent, canActivate: [ AuthGuard ] }
]

export const authRouting = RouterModule.forChild(authRoutes)

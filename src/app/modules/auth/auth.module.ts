import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthComponent } from './auth.component'
import { authRouting } from './auth.router'

import { AuthGuard } from './services/auth-guard'
import { AuthService } from './services/auth.service'

@NgModule({
  imports: [
    CommonModule,
    authRouting
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }

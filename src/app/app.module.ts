import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

// Importing Components
import { AppComponent } from './app.component'
import { HomepageComponent } from './components/homepage/homepage.component'

// Importing Modules
import { AuthModule } from './modules/auth/auth.module'

// Importing Configuration Files
import { appRouting } from './app.router'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

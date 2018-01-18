import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

// Importing Components
import { AppComponent } from './app.component'
import { HomepageComponent } from './components/homepage/homepage.component'

// Importing Modules
import { AuthModule } from './modules/auth/auth.module'

// Importing Configuration Files
import { appRouting } from './app.router'
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    appRouting,
    AuthModule
  ],
  providers: [ AngularFireDatabaseModule, AngularFireDatabase ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

// Importing Components
import { AppComponent } from './app.component'
import { HomepageComponent } from './components/homepage/homepage.component'

// Importing Configuration Files
import { appRouting } from './app.router'
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component'
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    appRouting
  ],
  providers: [ AngularFireDatabaseModule, AngularFireDatabase ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

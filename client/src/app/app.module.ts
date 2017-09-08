import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app.router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HeroComponent } from './components/hero/hero.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SearchbarComponent,
    WishlistComponent,
    HeroComponent,
    AppListComponent,
    AppCardComponent,
    FooterComponent,
    HomePageComponent,
    AppPageComponent,
    SinglePageComponent,
    Error404PageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopLeagueComponent } from './core/component/top-league/top-league.component';
import { LastGameResultsComponent } from './core/component/last-game-results/last-game-results.component';
import { NavbarComponent } from './core/component/top-league/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopLeagueComponent,
    LastGameResultsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

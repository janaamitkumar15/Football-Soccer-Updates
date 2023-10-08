import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopLeagueComponent } from './core/component/top-league/top-league.component';
import { LastGameResultsComponent } from './core/component/last-game-results/last-game-results.component';

const routes: Routes = [{ path: '', component: TopLeagueComponent },
{ path: 'last-game-results/:id', component: LastGameResultsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

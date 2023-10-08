import { Component } from '@angular/core';
import { FootballDataService } from '../../services/football-data.service';
import { Country, Standing, ApiResponse, standings } from '../../model/football.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-league',
  templateUrl: './top-league.component.html',
  styleUrls: ['./top-league.component.css']
})
export class TopLeagueComponent {
  selectedCountry!: Country;
  standings!: standings[];

  constructor(private footballDataService: FootballDataService, private router: Router) {
    window.onbeforeunload = function() {
      sessionStorage.clear();
      return '';
    };
  }

  ngOnInit() {
    const countryName = sessionStorage.getItem('countryName');
    if(countryName) {
      this.onCountrySelected(countryName);
    }else {
      this.onCountrySelected('England');
    }
  }

  onCountrySelected(countryName: string) {
    this.selectedCountry = { name: countryName, leagueId: this.getLeagueId(countryName) };
    const season = this.getCurrentSeason();
    this.footballDataService.getStandings(this.selectedCountry.leagueId, season).subscribe((data: ApiResponse<Standing[]>) => {
      this.standings = data.response[0].league.standings[0];
    });
    sessionStorage.setItem('countryName', countryName);
  }

  getLeagueId(countryName: string): number {
    switch (countryName) {
      case 'England':
        return 39;
      case 'Spain':
        return 140;
      case 'France':
        return 61;
      case 'Germany':
        return 78;
      case 'Italy':
        return 135;
      default:
        return -1;
    }
  }

  getCurrentSeason(): number {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    if (currentMonth >= 8) {
      return currentYear;
    } else {
      return currentYear - 1;
    }
  }

  showLastTenResults(teamId: number) {
    this.router.navigate(['/last-game-results', teamId ]);
  }

}

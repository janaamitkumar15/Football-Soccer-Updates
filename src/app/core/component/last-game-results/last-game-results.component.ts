import { Component } from '@angular/core';
import { FootballDataService } from '../../services/football-data.service';
import { Fixture, ApiResponse } from '../../model/football.types';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-last-game-results',
  templateUrl: './last-game-results.component.html',
  styleUrls: ['./last-game-results.component.css']
})
export class LastGameResultsComponent {
  lastTenResults!: Fixture[];

  constructor(private footballDataService: FootballDataService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
     this.showLastTenResults(params['id']);
    });
  }

   showLastTenResults(teamId: number) {
    this.footballDataService.getLastTenResults(teamId).subscribe((data: ApiResponse<Fixture[]>) => {
      this.lastTenResults = data.response;
    });
  }
}

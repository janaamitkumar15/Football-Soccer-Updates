import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Standing, Fixture } from '../model/football.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private apiUrl = 'https://v3.football.api-sports.io';
  private apiKey = 'b5ee4d6b3f1bcc8ab4813439d5aa0390';
  private apiHost = 'v3.football.api-sports.io';

  constructor(private http: HttpClient) { }

  getStandings(leagueId: number, season: number): Observable<ApiResponse<Standing[]>> {
    const url = `${this.apiUrl}/standings?league=${leagueId}&season=${season}`;
    const headers = {
      'x-rapidapi-host': this.apiHost,
      'x-rapidapi-key': this.apiKey
    };
    return this.http.get<ApiResponse<Standing[]>>(url, { headers });
  }

  getLastTenResults(teamId: number): Observable<ApiResponse<Fixture[]>> {
    const url = `${this.apiUrl}/fixtures?team=${teamId}&last=10`;
    const headers = {
      'x-rapidapi-host': this.apiHost,
      'x-rapidapi-key': this.apiKey
    };
    return this.http.get<ApiResponse<Fixture[]>>(url, { headers });
  }

}

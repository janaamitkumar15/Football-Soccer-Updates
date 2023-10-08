export interface Country {
    name: string;
    leagueId: number;
  }
export interface standings {
        rank: number,
        team: {
            id: number,
            name: string,
            logo: string
        },
        points: number,
        goalsDiff: number,
        group: string,
        form: string,
        status: string,
        description: string,
        all: {
            played: number,
            win: number,
            draw: number,
            lose: number,
            goals: {
                for: number,
                against: number
            }
        },
        home: {
            played: number,
            win: number,
            draw: number,
            lose: number,
            goals: {
                for: number,
                against: number
            }
        },
        away: {
            played: number,
            win: number,
            draw: number,
            lose: number,
            goals: {
                for: number,
                against: number
            }
        },
        update: string
  }
  
  export interface Standing {
    league: {
        id: number,
        name: string,
        country: string,
        logo: string,
        flag: string,
        season: number,
        standings: [standings[]]
    };
    team: {
      id: number;
      name: string;
      logo: string;
    };
    all: {
      played: number;
      win: number;
      lose: number;
      draw: number;
    };
    goalsDiff: number;
    points: number;
  }
  
  export interface Fixture {
    fixture: {
      date: string;
    };
    teams: {
      home: {
        name: string;
        logo: string;
      };
      away: {
        name: string;
        logo: string;
      };
    };
    goals: {
      home: number;
      away: number;
    };
  }
  
  export interface ApiResponse<T> {
    response: T;
  }
  
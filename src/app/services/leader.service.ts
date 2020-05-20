import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADRES } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADRES;
  }

  getLeader(id: string): Leader {
    return LEADRES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADRES.filter((dish) => dish.featured)[0];
    
  }
  
}

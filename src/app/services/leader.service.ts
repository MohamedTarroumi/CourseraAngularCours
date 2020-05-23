import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADRES } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADRES);
  }

  getLeader(id: string): Promise<Leader>  {
    return Promise.resolve(LEADRES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADRES.filter((dish) => dish.featured)[0]);
    
  }
  
}

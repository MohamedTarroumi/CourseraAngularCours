import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADRES } from '../shared/leaders';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return new Promise (resolve => {
      setTimeout(()=> resolve(LEADRES),2000)
    });
  }

  getLeader(id: string): Promise<Leader>  {
    return new Promise(resolve => {
      setTimeout(() => { 
        resolve(LEADRES.filter((dish) => (dish.id === id))[0]), 2000})
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise (
      resolve => {
        setTimeout(() => {
          resolve(LEADRES.filter((dish) => dish.featured)[0])
        }, 2000)
      }); 
  }
  
}

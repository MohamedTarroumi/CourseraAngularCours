import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADRES } from '../shared/leaders';
import { resolve } from 'url';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADRES).pipe(delay(2000));
  }

  getLeader(id: string): Observable<Leader>  {
    return of(LEADRES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADRES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}

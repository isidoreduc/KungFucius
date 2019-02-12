import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { promise } from 'protractor';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }

  getLeaders(): Observable<Leader[]>{
    return this.http.get<Leader[]>(baseURL + 'leaders');
  }

  getLeader(id: string): Observable<Leader>{
    return this.http.get<Leader>(baseURL + 'leaders/' + id);
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders?featured=true')
    .pipe(map(featured => featured[0]));
  }
}

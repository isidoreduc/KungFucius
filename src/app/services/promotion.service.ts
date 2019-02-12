import { ProcessHttpMsgService } from './process-http-msg.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotions';
import { Promotion } from '../shared/promotion';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
      private ProcessHttpMsgService: ProcessHttpMsgService) { }

  getPromotions(): Observable<Promotion[]> { // now this method is callable anywhere in the app, by injecting an instance of the service
    return this.http.get<Promotion[]>(baseURL + 'promotions')
      .pipe(catchError(this.ProcessHttpMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion>{
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
      .pipe(catchError(this.ProcessHttpMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion>{
    return this.http.get<Promotion>(baseURL + 'promotions?featured=true')
      .pipe(map(featured => featured[0]))
      .pipe(catchError(this.ProcessHttpMsgService.handleError));
  }
}

import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotions';
import { Promotion } from '../shared/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> { // now this method is callable anywhere in the app, by injecting an instance of the service
    return Promise.resolve(PROMOTIONS);
  }

  getPromotion(id: string): Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter(promo => promo.id === id)[0]);
  }

  getFeaturedPromotion(): Promise<Promotion>{
    return Promise.resolve(PROMOTIONS.filter(promo => promo.featured)[0]); // only get the first element, if more found
  }
}

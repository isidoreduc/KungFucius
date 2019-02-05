import { Injectable } from '@angular/core';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions() { // now this method is callable anywhere in the app, by injecting an instance of the service
    return PROMOTIONS;
  }

  getPromotion(id: string){
    return PROMOTIONS.filter(promo => promo.id === id)[0];
  }

  getFeaturedPromotion(){
    return PROMOTIONS.filter(promo => promo.featured)[0]; // only get the first element, if more found
  }
}
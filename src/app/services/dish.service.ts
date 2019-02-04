import { DISHES } from './../shared/dishes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes() { // now this method is callable anywhere in the app, by injecting an instance of the service
    return DISHES;
  }

  getDish(id: string){
    return DISHES.filter(dish => dish.id === id)[0];
  }

  getFeaturedDish(){
    return DISHES.filter(featDish => featDish.featured)[0]; // only get the first element, if more found
  }
}

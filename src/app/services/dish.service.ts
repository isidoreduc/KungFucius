import { DISHES } from './../shared/dishes';
import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> { // now this method is callable anywhere in the app, by injecting an instance of the service
    return Promise.resolve(DISHES);
  } // using  simple promises because the data is available locally

  getDish(id: string): Promise<Dish>{
    return Promise.resolve(DISHES.filter(dish => dish.id === id)[0]);
  }

  getFeaturedDish(): Promise<Dish>{
    return Promise.resolve(DISHES.filter(featDish => featDish.featured)[0]); // only get the first element, if more found
  }
}

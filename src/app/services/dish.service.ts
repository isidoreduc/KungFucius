import { DISHES } from './../shared/dishes';
import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> { // now this method is callable anywhere in the app, by injecting an instance of the service
    return new Promise(resolve => {
      // simulate a 2 second delay as if data came from server
      setTimeout( () => resolve(DISHES), 2000);
    })
  }

  getDish(id: string): Promise<Dish>{
    return new Promise(resolve => {
      // simulate a 2 second delay as if data came from server
      setTimeout( () => resolve(DISHES.filter(dish => dish.id === id)[0]), 2000);
    });
  }

  getFeaturedDish(): Promise<Dish>{
    return new Promise(resolve => {
      // simulate a 2 second delay as if data came from server
      setTimeout( () => resolve(DISHES.filter(featDish => featDish.featured)[0]), 2000);
    }); // only get the first element, if more found
  }
}

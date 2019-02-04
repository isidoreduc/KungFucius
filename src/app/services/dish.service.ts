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
}

import { DishService } from './../services/dish.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];

  constructor(private ds: DishService, // inject the service (creates automatically an instance of the service)
    @Inject('baseURL') public baseURL) { } // when injecting a variable we need to use Inject decorator

  ngOnInit() { // using the lifecycle method to fetch info using the injected service
    this.ds.getDishes().
      subscribe(items => this.dishes = items); //promise
  }

}

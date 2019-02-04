import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/Dish';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish; //= DISHES[0]; // initiated to show by default the first dish. If not initiated it does not show anything

  constructor(private ds: DishService) { } // inject the service (creates automatically an instance of the service)

  ngOnInit() { // using the lifecycle method to fetch info using the injected service
    this.dishes = this.ds.getDishes();
  }

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }

}

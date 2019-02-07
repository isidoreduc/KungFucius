import { Leader } from './../shared/leader';
import { LeaderService } from './../services/leader.service';
import { Promotion } from './../shared/promotion';
import { Dish } from './../shared/dish';
import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishServ: DishService,
              private promoServ: PromotionService,
              private leaderServ: LeaderService) { }

  ngOnInit() {
    this.dishServ.getFeaturedDish()
      .then(item => this.dish = item);
    this.promoServ.getFeaturedPromotion()
      .then(item => this.promotion = item);
    this.leaderServ.getFeaturedLeader()
      .then(item => this.leader = item);
  }

}

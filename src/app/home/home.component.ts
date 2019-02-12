import { baseURL } from './../shared/baseurl';
import { Leader } from './../shared/leader';
import { LeaderService } from './../services/leader.service';
import { Promotion } from './../shared/promotion';
import { Dish } from './../shared/dish';
import { DishService } from './../services/dish.service';
import { Component, OnInit, Inject } from '@angular/core';
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
  dishErrMess: string;
  leaderErrMess: string;
  promotionErrMess: string;

  constructor(private dishServ: DishService,
              private promoServ: PromotionService,
              private leaderServ: LeaderService,
              @Inject('baseURL') public baseURL) { }

  ngOnInit() {
    this.dishServ.getFeaturedDish()
      .subscribe(item => this.dish = item,
        errMess => this.dishErrMess = <any>errMess);

    this.promoServ.getFeaturedPromotion()
      .subscribe(item => this.promotion = item,
        errMess => this.promotionErrMess = <any>errMess);

    this.leaderServ.getFeaturedLeader()
      .subscribe(item => this.leader = item,
        errMess => this.leaderErrMess = <any>errMess);
  }

}

import { baseURL } from './../shared/baseurl';
import { LeaderService } from './../services/leader.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];

  constructor(private leaderServ: LeaderService,
    @Inject('baseURL') public baseURL) { }

  ngOnInit() {
    this.leaderServ.getLeaders()
      .subscribe(items => this.leaders = items);
  }

}

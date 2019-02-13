import { baseURL } from './../shared/baseurl';
import { LeaderService } from './../services/leader.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(), expand()
    ]
})

export class AboutComponent implements OnInit {
  leaders: Leader[];
  errMessage: string;

  constructor(private leaderServ: LeaderService,
    @Inject('baseURL') public baseURL) { }

  ngOnInit() {
    this.leaderServ.getLeaders()
      .subscribe(items => this.leaders = items,
                errMess => this.errMessage = <any>errMess);
  }

}

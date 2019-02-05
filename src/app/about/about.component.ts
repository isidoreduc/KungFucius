import { LeaderService } from './../services/leader.service';
import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaders: Leader[];

  constructor(private leaderServ: LeaderService) { }

  ngOnInit() {
    this.leaders = this.leaderServ.getLeaders();
  }

}

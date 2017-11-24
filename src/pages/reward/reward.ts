import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RewardService } from '../../services/reward.service';
import { Reward } from '../../models/reward.model';

@Component({
  selector: 'page-list',
  templateUrl: 'reward.html'
})
export class RewardPage implements OnInit {
  rewards: Reward[] = [];

  constructor(
    public rewardService: RewardService
  ) { }


  ngOnInit() {
    this.rewardService.getMyRewards()
      .subscribe(
      (data) => 
      {
        this.rewards = data,
        console.log(data);
      })
  }

}
import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  // TODO: Switch to selector to profile
  profile = this.profileService.profile;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

}

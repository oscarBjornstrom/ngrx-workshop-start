import { Component, OnInit } from '@angular/core';
import {State} from '../../../store/reducers';
import {Store} from '@ngrx/store';
import {selectProfile} from '../../../store/selectors/profile.selector';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  profile = this.store.select(selectProfile);
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

}

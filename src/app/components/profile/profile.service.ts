import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Profile} from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile = new BehaviorSubject(new Profile('', '', '', ''));

  constructor() {
  }

  setProfile(inputProfile: Profile) {
    this.profile.next(inputProfile);
  }

}

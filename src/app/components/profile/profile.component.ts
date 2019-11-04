import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BehaviorSubject, of} from 'rxjs';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isEdit = new BehaviorSubject(false);
  profileForm = this.fb.group({
    username: [{value: '', disabled: !this.isEdit.value}],
    age: [{value: '', disabled: !this.isEdit.value}],
    email: [{value: '', disabled: !this.isEdit.value}],
    description: [{value: '', disabled: !this.isEdit.value}],
  });

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.profile.subscribe(val => this.profileForm.patchValue(val));
  }

  toggleEdit() {
    if (this.isEdit.value) {
      this.isEdit.next(false);
      this.profileService.setProfile(this.profileForm.getRawValue());
      Object.keys(this.profileForm.controls).forEach(key => {
        this.profileForm.controls[key].disable();
      });
    } else {
      this.isEdit.next(true);
      Object.keys(this.profileForm.controls).forEach(key => {
        this.profileForm.controls[key].enable();
      });
    }
  }

}

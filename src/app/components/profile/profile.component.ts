import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {ProfileService} from './profile.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  isEdit = new BehaviorSubject(false);
  profileForm = this.fb.group({
    username: [{value: '', disabled: !this.isEdit.value}],
    age: [{value: '', disabled: !this.isEdit.value}],
    email: [{value: '', disabled: !this.isEdit.value}],
    description: [{value: '', disabled: !this.isEdit.value}],
  });
  private onDestroy = new Subject();

  // TODO 21: inject store
  constructor(private fb: FormBuilder, private profileService: ProfileService) {
  }

  ngOnInit() {
    // TODO 24: Switch to profileSelector
    this.profileService.profile.pipe(takeUntil(this.onDestroy)).subscribe(val => this.profileForm.patchValue(val));
  }

  toggleEditAndSave() {
    if (this.isEdit.value) {
      this.isEdit.next(false);
      // TODO 22: Dispatch save profile action
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

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}

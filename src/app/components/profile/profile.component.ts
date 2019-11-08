import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BehaviorSubject, of, Subject} from 'rxjs';

import {takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers';
import {selectProfile} from '../../store/selectors/profile.selector';
import {setProfile} from '../../store/actions/profile.actions';

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

  constructor(private fb: FormBuilder, private store: Store<State>) {
  }

  ngOnInit() {
    this.store.select(selectProfile).pipe(takeUntil(this.onDestroy)).subscribe(val => this.profileForm.patchValue(val));
  }

  toggleEditAndSave() {
    if (this.isEdit.value) {
      this.isEdit.next(false);
      this.store.dispatch(setProfile({profile: this.profileForm.getRawValue()}));

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

import {createReducer, on} from '@ngrx/store';
import {setProfile} from '../actions/profile.actions';

export interface ProfileState {
  username: string;
  age: string;
  email: string;
  description: string;
}

export const initialState: ProfileState = {
  username: '',
  age: '',
  email: '',
  description: ''
};

export const profileReducer = createReducer(
  initialState,
  on(setProfile, (state, {profile}) => ({...state, ...profile}))
);

import * as fromCounter from '../actions/counter.actions';

import {createReducer, on} from '@ngrx/store';

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0
};

export const counterReducer = createReducer(
  initialState,
  on(fromCounter.increment, state => ({...state, counter: state.counter + 1})),
  on(fromCounter.decrement, state => ({...state, counter: state.counter - 1})),
  on(fromCounter.reset, state => ({...initialState})),
  on(fromCounter.setValue, (state, {newValue}) => ({...state, counter: newValue}))
);

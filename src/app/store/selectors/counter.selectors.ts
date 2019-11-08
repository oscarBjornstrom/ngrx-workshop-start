import {createSelector} from '@ngrx/store';
import {selectRootState, State} from '../reducers';

export const selectCounterState = createSelector(
  selectRootState,
  (state: State) => state.counter
);

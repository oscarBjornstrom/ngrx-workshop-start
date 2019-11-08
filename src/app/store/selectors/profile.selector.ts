
import {createSelector} from '@ngrx/store';
import {selectRootState, State} from '../reducers';

export const selectProfile = createSelector(
  selectRootState,
  (state: State) => state.profile
);

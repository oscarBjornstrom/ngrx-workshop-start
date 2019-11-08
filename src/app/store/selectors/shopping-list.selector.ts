
import {createSelector} from '@ngrx/store';
import {selectRootState, State} from '../reducers';

export const selectShoppingList = createSelector(
  selectRootState,
  (state: State) => state.shoppingList
);

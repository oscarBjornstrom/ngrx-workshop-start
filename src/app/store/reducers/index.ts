import {
  ActionReducerMap,
} from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromShoppingList from './shopping-list.reducer';
import {profileReducer, ProfileState} from './profile.reducer';


export interface State {
  counter: fromCounter.CounterState;
  profile: ProfileState;
  shoppingList: fromShoppingList.ShoppingListState;
}

export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.counterReducer,
  profile: profileReducer,
  shoppingList: fromShoppingList.shoppingListReducer
};

export const selectRootState = state => state;

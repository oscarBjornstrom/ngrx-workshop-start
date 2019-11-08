
import {ShoppingListItemModel} from '../../components/shopping-list/shopping-list-item.model';
import {createReducer, on} from '@ngrx/store';
import * as fromShoppingListActions from '../actions/shopping-list.actions';

export interface ShoppingListState {
  shoppingList: ShoppingListItemModel[];
}

export const initialState: ShoppingListState = {
  shoppingList: []
};

export const shoppingListReducer = createReducer(
  initialState,
  on(fromShoppingListActions.addListItem, (state, {newItem}) =>
    ({...state, shoppingList: [...state.shoppingList, newItem]})),
  on(fromShoppingListActions.removeListItemByIndex, (state, {removeIndex}) =>
    ({
      ...state, shoppingList: [
        ...state.shoppingList.filter(
          (item, index) => index !== removeIndex)
      ]
    })),
  on(fromShoppingListActions.toggleAcquired, (state, {updateIndex}) =>
    ({
      ...state, shoppingList: [...state.shoppingList.map((item, index) => {
        if (index !== updateIndex) {
          return;
        }
        return {...item, acquired: !item.acquired};
      })]
    })
  )
);


import {createAction, props} from '@ngrx/store';
import {ShoppingListItemModel} from '../../components/shopping-list/shopping-list-item.model';

export const addListItem = createAction(
  '[Shopping List] addListItem',
  props<{ newItem: ShoppingListItemModel }>()
);

export const removeListItemByIndex = createAction(
  '[Shopping List] removeItemByIndex',
  props<{ removeIndex: number }>()
);

export const toggleAcquired = createAction(
  '[Shopping List] toggleAcquired',
  props<{ updateIndex: number }>()
);

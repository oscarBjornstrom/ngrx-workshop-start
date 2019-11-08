import {Component, OnInit} from '@angular/core';
import {State} from '../../store/reducers';
import {Store} from '@ngrx/store';
import * as fromShoppingListActions from '../../store/actions/shopping-list.actions';
import {selectShoppingList} from '../../store/selectors/shopping-list.selector';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingList$ = this.store.select(selectShoppingList);
  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }

  removeItem(index) {
    this.store.dispatch(fromShoppingListActions.removeListItemByIndex({removeIndex: index}));
  }

  updateItem(index) {
    this.store.dispatch(fromShoppingListActions.toggleAcquired({updateIndex: index}));
  }
}

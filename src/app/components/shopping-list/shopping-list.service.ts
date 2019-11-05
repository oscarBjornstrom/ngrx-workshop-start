import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {ShoppingListItemModel} from './shopping-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingList = new BehaviorSubject<ShoppingListItemModel[]>([]);

  constructor() {
  }

  addItem(newItem: ShoppingListItemModel) {
    // TODO 33: Move to reducer
    const newArr = [...this.shoppingList.value, newItem];
    this.shoppingList.next(newArr);
  }

  removeItem(removeIndex) {
    // TODO 34: Move to reducer
    const newArr = this.shoppingList.value.filter((item, index) => index !== removeIndex);
    this.shoppingList.next(newArr);
  }

  toggleAcquired(index) {
    // TODO: 35 Move to reducer
    const updatedArray = this.shoppingList.value.map((item, i) => {
      if (i !== index) {
        return;
      }
      return {...item, acquired: !item.acquired};
    });
    this.shoppingList.next(updatedArray);
  }


}

import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {ShoppingListItemModel} from './shopping-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingList = new BehaviorSubject<ShoppingListItemModel[]>([]);
  totalLeft = new BehaviorSubject<number>(0);

  constructor() {
  }

  addItem(newItem: ShoppingListItemModel) {
    const newArr = [...this.shoppingList.value, newItem];
    this.shoppingList.next(newArr);
    this.totalLeft.next(this.calculateTotalLeft());
  }

  removeItem(removeIndex) {
    const newArr = this.shoppingList.value.filter((item, index) => index !== removeIndex);
    this.shoppingList.next(newArr);
    this.totalLeft.next(this.calculateTotalLeft());
  }

  clearList() {
    this.shoppingList.next([]);
  }

  calculateTotalLeft() {
    return this.shoppingList.value.filter(item => item.acquired === false).length;
  }
}

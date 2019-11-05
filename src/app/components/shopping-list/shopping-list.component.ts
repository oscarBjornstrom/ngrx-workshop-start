import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  // TODO: use store selector
  shoppingList$ = this.shoppingListService.shoppingList;

  // TODO: Inject store
  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  removeItem(index) {
    // TODO: Dispatch remove item action
    this.shoppingListService.removeItem(index);
  }

  updateItem(index) {
    // TODO: Dispatch toggle acquired action
    this.shoppingListService.toggleAcquired(index);
  }
}

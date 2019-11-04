import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {
  }

  shoppingList$ = this.shoppingListService.shoppingList.pipe(tap(console.log));

  ngOnInit() {
  }

  removeItem(index) {
    this.shoppingListService.removeItem(index);
  }
}

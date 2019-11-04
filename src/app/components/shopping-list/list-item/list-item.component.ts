import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ShoppingListItemModel} from '../shopping-list-item.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() shoppingListItem: ShoppingListItemModel;
  @Output() removeItem = new EventEmitter();
  @Output() updateItem = new EventEmitter();
  checkboxControl = new FormControl(false);
  constructor() {
  }

  ngOnInit() {
  }

}

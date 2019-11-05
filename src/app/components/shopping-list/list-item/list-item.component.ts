import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {ShoppingListItemModel} from '../shopping-list-item.model';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnDestroy {
  @Input() shoppingListItem: ShoppingListItemModel;
  @Output() removeItem = new EventEmitter();
  @Output() updateItem = new EventEmitter<boolean>();
  checkboxControl = new FormControl(false);
  private onDestroy = new Subject();

  constructor() {
  }

  ngOnInit() {
    this.checkboxControl.valueChanges.pipe(takeUntil(this.onDestroy)).subscribe(val => {
      if (val) {
        this.updateItem.emit(true);
      } else {
        this.updateItem.emit(false);

      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

}

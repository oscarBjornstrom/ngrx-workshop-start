import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  addItemForm = this.fb.group({
    name: ['', Validators.required],
    quantity: ['', Validators.required]
  });
  // TODO 36: Inject Store
  constructor(private fb: FormBuilder, private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addItemToList() {
    const shoppingListItem = {...this.addItemForm.value, acquired: false};
    // TODO 37: Dispatch addListItem action
    this.shoppingListService.addItem(shoppingListItem);
    this.addItemForm.reset();
  }

}

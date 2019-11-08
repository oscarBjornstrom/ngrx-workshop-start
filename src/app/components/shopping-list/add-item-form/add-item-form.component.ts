import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {State} from '../../../store/reducers';
import {Store} from '@ngrx/store';
import {addListItem} from '../../../store/actions/shopping-list.actions';

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
  constructor(private fb: FormBuilder, private store: Store<State>) {
  }

  ngOnInit() {
  }

  addItemToList() {
    const shoppingListItem = {...this.addItemForm.value, acquired: false};

    this.store.dispatch(addListItem({newItem: shoppingListItem}));
    this.addItemForm.reset();
  }

}

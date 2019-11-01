import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm = this.fb.group({
    name: '',
    imageUrl: '',
    description: '',
    rating: 0
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  logValue() {
    console.log(this.addForm.getRawValue());
  }

}

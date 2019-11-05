import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent implements OnInit {
  // TODO: Change counter into an observable
  counter = 0;
  numInput = 0;

  // TODO: Inject store
  constructor() {
  }

  ngOnInit() {
  }

  // TODO: dispatch increment action
  addOne() {
    this.counter++;
  }

  // TODO: dispatch decrement action
  removeOne() {
    this.counter--;
  }

  // TODO: dispatch reset action
  reset() {
    this.counter = 0;
  }

  // TODO: dispatch setValue action
  setValue() {
    this.counter = this.numInput;
  }
}



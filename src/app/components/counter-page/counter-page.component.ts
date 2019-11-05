import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent implements OnInit {
  // TODO 14: Select counter from store
  counter = 0;
  numInput = 0;

  // TODO 7: Inject store
  constructor() {
  }

  ngOnInit() {
  }

  // TODO 8: dispatch increment action
  addOne() {
    this.counter++;
  }

  // TODO 9: dispatch decrement action
  removeOne() {
    this.counter--;
  }

  // TODO 10: dispatch reset action
  reset() {
    this.counter = 0;
  }

  // TODO 11: dispatch setValue action
  setValue() {
    this.counter = this.numInput;
  }
}



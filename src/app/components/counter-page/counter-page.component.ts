import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent implements OnInit {
  counter = 0;
  numInput = 0;

  constructor() {
  }

  ngOnInit() {
  }

  addOne() {
    this.counter++;
  }

  removeOne() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

  setValue() {
    this.counter = this.numInput;
  }
}



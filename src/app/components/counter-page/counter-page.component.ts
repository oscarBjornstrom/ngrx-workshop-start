import {Component, OnInit} from '@angular/core';
import {State} from '../../store/reducers';
import {Store} from '@ngrx/store';
import * as fromCounterActions from '../../store/actions/counter.actions';
import {selectCounterState} from '../../store/selectors/counter.selectors';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent implements OnInit {


  counter$ = this.store.select(selectCounterState);


  numInput = 0;


  constructor(private store: Store<State>) {
  }

  ngOnInit() {
  }


  addOne() {
    this.store.dispatch(fromCounterActions.increment());
  }


  removeOne() {
    this.store.dispatch(fromCounterActions.decrement());
  }


  reset() {
    this.store.dispatch(fromCounterActions.reset());
  }

  setValue() {
    this.store.dispatch(fromCounterActions.setValue({newValue: this.numInput}));
  }
}



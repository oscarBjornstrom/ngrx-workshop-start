import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {GOTmock} from '../../shared/mocks/series.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// TODO: add-series selector to series
  serie$ = of(Array.from({length: 8}, () => GOTmock));

  constructor() {
  }

  ngOnInit() {
  }

}

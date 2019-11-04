import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {GOTmock} from '../../shared/mocks/series.mock';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
// TODO: add-series selector to series
  serie$ = of(Array.from({length: 8}, () => GOTmock));

  constructor() { }

  ngOnInit() {
  }

}

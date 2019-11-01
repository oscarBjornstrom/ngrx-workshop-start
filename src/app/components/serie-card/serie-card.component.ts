import {Component, Input, OnInit} from '@angular/core';
import {SerieModel} from '../../shared/serie.model';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.scss']
})
export class SerieCardComponent implements OnInit {
  @Input() serie: SerieModel;

  constructor() {
  }

  ngOnInit() {
  }

}

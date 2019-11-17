import { Component, OnInit, Input } from '@angular/core';
import { Muscle } from 'src/app/shared/models/muscle';

@Component({
  selector: 'app-muscle',
  templateUrl: './muscle.component.html',
  styleUrls: ['./muscle.component.scss']
})
export class MuscleComponent implements OnInit {

  @Input() muscle: Muscle;

  constructor() { }

  ngOnInit() {
  }

}

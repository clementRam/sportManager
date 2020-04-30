import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/shared/services/exercise.service';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from 'src/app/shared/models/exercise.model';
import { Store, DefaultStoreDataNames } from 'src/app/shared/store/store';
import { LocalDBService } from 'src/app/shared/services/localDB.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  exercise: Exercise;

  constructor(
    private exerciseService: ExerciseService, 
    private route: ActivatedRoute, 
    private store: Store, 
    private db: LocalDBService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.exerciseService.getExercise(params['exerciseId']).subscribe(exercise => {
        this.exercise = exercise;
        this.store.set(DefaultStoreDataNames.NAVBAR_TITLE, this.exercise.name);
      });
    });
  }

}

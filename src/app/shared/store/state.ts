import { Workout } from '../models/workout.model';
import { Muscle } from '../models/muscle.model';

export interface State {
    workouts: Workout[];
    muscles: Muscle[];
}


import { Workout } from './workout.model';

export interface Programme{
    id: string;
    name: string;
    workouts: Workout[];
}
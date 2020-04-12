import { Workout } from './workout.model';

export interface Programme{
    id: number;
    name: string;
    workouts: Workout[];
}
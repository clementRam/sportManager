import { Muscle } from './muscle.model';

export interface Workout {
    id: number;
    index: number;
    name: string;
    muscles: Muscle[]
}

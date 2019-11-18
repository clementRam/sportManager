import { Muscle } from './muscle.model';

export interface Workout {
    id: string;
    index: number;
    name: string;
    muscles: Muscle[]
}

import { Muscle } from './muscle';

export interface Workout {
    id: string;
    index: number;
    name: string;
    muscles: Muscle[]
}

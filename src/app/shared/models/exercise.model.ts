import { Muscle } from './muscle.model';
import { Time } from '@angular/common';

export interface Exercise {
    id: number;
    name: String;
    nbSerie: Number;
    nbRepetition: Number;
    restTime: Time;
    muscles: Muscle[];
}
import { BehaviorSubject, Observable } from 'rxjs';
import { State } from './state';
import { distinctUntilChanged } from 'rxjs/operators';
import { pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const initState: State = {
    muscles: undefined,
    workouts: undefined
};

export enum DefaultStoreDataNames {
    MUSCLES = "muscles",
    WORKOUTS = "workouts"
}

@Injectable({
    providedIn: 'root'
})
export class Store {

    private subject = new BehaviorSubject<State>(initState);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }

    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        });
    }
}

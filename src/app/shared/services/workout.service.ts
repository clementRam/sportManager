import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store, DefaultStoreDataNames } from '../store/store';
import { environment } from 'src/environments/environment';
import Dexie from 'dexie';
import { Programme } from '../models/programme.model';
import { LocalDBService } from './localDB.service';

@Injectable({
  providedIn: 'root'
})

export class WorkoutService {

  workoutTable: Dexie.Table<Workout, number> = this.db.table("workout");

  constructor(private store: Store, private http: HttpClient, private db: LocalDBService) { }

  public getWorkouts(): Observable<Workout[]>{
    if(environment.useLocalData){
      return from(this.workoutTable.toArray());
    }
    return this.http.get<Workout[]>(`${environment.apiUrl}/workouts`).pipe(
      map((workouts: Workout[]) => {
        this.store.set(DefaultStoreDataNames.WORKOUTS, workouts);
        return workouts;
    }));;
  }

  public getWorkout(id: number): Observable<Workout> {
    if(environment.useLocalData){
      return from(this.workoutTable.get(id));
    }
    return this.http.get<Workout>(`${environment.apiUrl}/workouts/${id}`)
  }

  public addWorkout(workout: Workout): Observable<Workout> {
    if(environment.useLocalData){
      return from(this.workoutTable.put(workout)).pipe(map(id => {
        workout.id = id;
        return workout;
      }));
    }
    return this.http.post<Workout>(`${environment.apiUrl}/workouts`, workout);
  }

  public updateWorkout(workout: Workout): Observable<Workout>{
    return this.http.put<Workout>(`${environment.apiUrl}/workouts/${workout.id}`, workout);
  }

  public deleteWorkout(id: number): Observable<String>{
    return this.http.delete<String>(`${environment.apiUrl}/workouts/${id}`);
  }
}

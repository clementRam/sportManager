import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store, DefaultStoreDataNames } from '../store/store';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WorkoutService {

  constructor(private store: Store, private http: HttpClient) { }

  public getWorkouts(): Observable<Workout[]>{
    return this.http.get<Workout[]>(`${environment.apiUrl}/workouts`).pipe(
      map((workouts: Workout[]) => {
        this.store.set(DefaultStoreDataNames.WORKOUTS, workouts);
        return workouts;
    }));;
  }

  public addWorkout(workout: Partial<Workout>): Observable<Workout> {
    return this.http.post<Workout>(`${environment.apiUrl}/workouts`, workout);
  }

  public updateWorkout(workout: Workout): Observable<Workout>{
    return this.http.put<Workout>(`${environment.apiUrl}/workouts/${workout.id}`, workout);
  }

  public deleteWorkout(id: number): Observable<String>{
    return this.http.delete<String>(`${environment.apiUrl}/workouts/${id}`);
  }
}

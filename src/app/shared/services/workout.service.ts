import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Workout } from '../models/workout.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WorkoutService {

  private workoutLastIndex: number;

  constructor(private db: AngularFirestore) { }

  public getWorkouts(): Observable<Workout[]>{
    return this.db.collection<Workout>('workout', ref => ref.orderBy('index', 'asc')).snapshotChanges().pipe((map(r => {
      this.workoutLastIndex = r[r.length - 1].payload.doc.data().index | 0;
      return r.map(d => {
        return {
          id: d.payload.doc.id,
          ...d.payload.doc.data()
        }
      })}
    )));
  }

  public addWorkout(workout: Partial<Workout>): Promise<DocumentReference> {
    workout.index = this.getNextWorkoutIndex();
    workout.muscles = [];
    return this.db.collection<Partial<Workout>>('workout').add(workout);
  }

  public updateWorkout(workout: Workout){
    return this.db.doc<Workout>(`/workout/${workout.id}`).update(workout);
  }

  public deleteWorkout(id: string): Promise<void>{
    return this.db.doc<Workout>(`/workout/${id}`).delete();
  }

  private getNextWorkoutIndex(): number{
    return this.workoutLastIndex + 1;
  }
}

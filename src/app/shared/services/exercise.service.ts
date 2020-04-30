import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { }

  public getExercises(): Observable<Exercise[]>{
  
    return this.http.get<Exercise[]>(`${environment.apiUrl}/exercises`);
  }

  public getExercise(id: number): Observable<Exercise>{
    return this.http.get<Exercise>(`${environment.apiUrl}/exercises/${id}`);
  }

  public createExercise(exercise: Partial<Exercise>): Observable<Exercise>{
    return this.http.post<Exercise>(`${environment.apiUrl}/exercises`, exercise);
  }

  public updateExercise(exercise: Exercise): Observable<Exercise>{
    return this.http.put<Exercise>(`${environment.apiUrl}/exercises/${exercise.id}`, exercise);
  }
}

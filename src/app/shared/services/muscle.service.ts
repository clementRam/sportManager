import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Muscle } from '../models/muscle.model';
import { map } from 'rxjs/operators';
import { DefaultStoreDataNames, Store } from '../store/store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  constructor(private store: Store, private http: HttpClient) { }

  public createMuscle(muscle: Partial<Muscle>): Observable<Muscle>{
    return this.http.post<Muscle>(`${environment.apiUrl}/muscles`, muscle);
  }

  public editMuscle(muscle: Muscle): Observable<Muscle>{
    return this.http.put<Muscle>(`${environment.apiUrl}/muscles/${muscle.id}`, muscle);
  }

  public getLocalMuscles(): Observable<Muscle[]>{
    return new Observable(observer => observer.next(JSON.parse(localStorage.getItem('muscles')) as Muscle[]));
  }

  public getMuscles(): Observable<Muscle[]>{
    return this.http.get<Muscle[]>(`${environment.apiUrl}/muscles`)
    .pipe(map(muscles => {
      this.store.set(DefaultStoreDataNames.MUSCLES, muscles);
      return muscles;
    }));
  }
}

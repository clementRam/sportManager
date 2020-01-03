import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Muscle } from '../models/muscle.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { DefaultStoreDataNames, Store } from '../store/store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  constructor(private db: AngularFirestore, private store: Store, private http: HttpClient) { }

  public getFirebaseMuscles(): Observable<Muscle[]>{
    return this.db.collection<Muscle>('muscle').snapshotChanges().pipe((map(r => {
      return r.map(d => {
        return {
          id: d.payload.doc.id,
          ...d.payload.doc.data()
        }
      })}
    ))).pipe(
      map((muscles: Muscle[]) => {
        this.store.set(DefaultStoreDataNames.MUSCLES, muscles);
        return muscles;
    }));
  }

  public getLocalMuscles(): Observable<Muscle[]>{
    return new Observable(observer => observer.next(JSON.parse(localStorage.getItem('muscles')) as Muscle[]));
  }

  public getMuscles(): Observable<Muscle[]>{
    return this.http.get<Muscle[]>(`${environment.apiUrl}/muscles`);
  }
}

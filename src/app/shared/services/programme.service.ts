import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Programme } from '../models/programme.model';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalDBService } from './localDB.service';
import Dexie from 'dexie';
import { map } from 'rxjs/operators';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  programmeTable: Dexie.Table<Programme, number> = this.db.table("programme");
  workoutTable: Dexie.Table<Workout, number> = this.db.table("workout");
  programmeWorkoutTable: Dexie.Table<{programmeId: number, workoutId: number}, [number, number]> = this.db.table("programme_workout");

  constructor(private http: HttpClient, private db: LocalDBService) { }

  getProgrammes(): Observable<Programme[]> {
    if(environment.useLocalData){
      return from(this.programmeTable.toArray());
    }
    return this.http.get<Programme[]>(`${environment.apiUrl}/programmes`);
  }

  getProgramme(id: number): Observable<Programme> {
    if(environment.useLocalData){
      return from(this.programmeTable.get(id)).pipe(map(programme => {
        this.getWorkoutsByProgrammeOnLocalDataBase(id).then(workouts => programme.workouts = workouts as Workout[]);
        return programme;
      }));
    }

    return this.http.get<Programme>(`${environment.apiUrl}/programmes/${id}`);
  }

  createProgramme(programme: Programme): Observable<Programme>{
    if(environment.useLocalData){
      return from(this.programmeTable.put(programme)).pipe(
        map(id => {
          programme.id = id;
          return programme;
        }));
    }
    return this.http.post<Programme>(`${environment.apiUrl}/programmes`, programme);
  }

  addWorkoutToProgramme(programmeId: number, workoutId: number): Observable<[number, number]>{
    return from(this.programmeWorkoutTable.put({programmeId: programmeId, workoutId: workoutId}));
  }

  updateProgramme(programme: Programme): Observable<Programme>{
    if(environment.useLocalData){
      programme.workouts.forEach(workout => this.addWorkoutToProgrammeOnLocalDataBase(workout, programme).subscribe())
      return from(this.programmeTable.put(programme)).pipe(
        map(() => programme));
    }
    return this.http.put<Programme>(`${environment.apiUrl}/programmes/${programme.id}`, programme);
  }

  deleteProgramme(id: number): Observable<void>{
    if(environment.useLocalData){
      return from(this.programmeTable.delete(id));
    }
    return this.http.delete<void>(`${environment.apiUrl}/programmes/${id}`)
  }

  private addWorkoutToProgrammeOnLocalDataBase(workout: Workout, programme: Programme){
    return from(this.programmeWorkoutTable.put({programmeId: programme.id, workoutId: workout.id}));
  }

  private async getWorkoutsByProgrammeOnLocalDataBase(programmeId: number): Promise<Workout[]>{
    return await this.programmeWorkoutTable.where({ programmeId: programmeId })
    .each(pw => this.workoutTable.where({ id: pw.workoutId })) as unknown as Workout[];
  }

}

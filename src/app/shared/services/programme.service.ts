import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Programme } from '../models/programme.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  constructor(private http: HttpClient) { }

  getProgrammes(): Observable<Programme[]> {
    return this.http.get<Programme[]>(`${environment.apiUrl}/programmes`);
  }

  getProgramme(id: string): Observable<Programme> {
    return this.http.get<Programme>(`${environment.apiUrl}/programmes/${id}`);
  }

  createProgramme(programme: Partial<Programme>): Observable<Programme>{
    return this.http.post<Programme>(`${environment.apiUrl}/programmes`, programme);
  }

  updateProgramme(programme: Programme): Observable<Programme>{
    return this.http.put<Programme>(`${environment.apiUrl}/programmes/${programme.id}`, programme);
  }

  deleteProgramme(id: number): Observable<String>{
    return this.http.delete<String>(`${environment.apiUrl}/programmes/${id}`)
  }

}

import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import { localDBSchema } from '../data/local-db-schema';


@Injectable({
  providedIn: 'root'
})
export class LocalDBService extends Dexie {
  constructor() {
    super("sport-manager");
    this.version(1).stores(localDBSchema);
  }
}
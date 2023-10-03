import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireObject,AngularFireList} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import Db from './db.model'

@Injectable({
  providedIn: 'root'
})
export class RtdbService {
  private dbPath = '/';
  tutorialsRef: AngularFireList<Db>;

  constructor(private db: AngularFireDatabase) {

    this.tutorialsRef = db.list(this.dbPath);
   }

  showData():AngularFireList<Db>{
    return this.tutorialsRef;
  }
  
}

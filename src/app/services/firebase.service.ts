import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  workshops: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    /*
      this.workshops = db.list('/workshops');
    */
  }

  getWorkshops () {
    this.workshops = this.db.list('/workshops') as FirebaseListObservable<Workshop>
    return this.workshops;
  }

}

interface Workshop {
  $key?:string;
  title?:string;
  description?:string;
}

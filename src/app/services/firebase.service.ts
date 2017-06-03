import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {

  workshops: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
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

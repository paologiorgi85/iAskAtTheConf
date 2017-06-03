import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {

  workshops:  FirebaseListObservable<any[]>;
  workshop:   FirebaseObjectObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
  }

  getWorkshops () {
    this.workshops = this.db.list('/workshops') as FirebaseListObservable<Workshop[]>
    return this.workshops;
  }

  getWorkshopDetails(id){
    this.workshop = this.db.object('/workshops/'+id) as FirebaseObjectObservable<Workshop>
    return this.workshop;
  }

}

interface Workshop {
  $key?:string;
  id?:string;
  title?:string;
  description?:string;
}

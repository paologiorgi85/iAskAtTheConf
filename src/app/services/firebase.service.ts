import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Workshop } from '../interfaces/workshop';
import { Message } from '../interfaces/workshop';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {

  id:                 any;
  workshops:          FirebaseListObservable<any[]>;
  workshop:           FirebaseObjectObservable<any>;
  listOfQuestions:    FirebaseListObservable<any[]>;
  question:           FirebaseObjectObservable<any>;

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

  getMessageDetails(idWorkshop,idQuestion){
    this.question = this.db.object('/workshops/'+idWorkshop+'/questions/'+idQuestion) as FirebaseObjectObservable<Message>
    return this.question;
  }

  getWorkshopQuestions(idWorkshop){
    this.listOfQuestions = this.db.list('/workshops/'+idWorkshop+'/questions') as FirebaseListObservable<Workshop[]>
    return this.listOfQuestions;
  }

  addQuestion(message) {
    this.listOfQuestions.push(message);
  }

  removeQuestion(index) {
    this.listOfQuestions.remove(index);
  }
}

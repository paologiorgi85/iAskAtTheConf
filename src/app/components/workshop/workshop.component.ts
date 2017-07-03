import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Workshop } from '../../interfaces/workshop';
import { Message } from '../../interfaces/workshop';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})

export class WorkshopComponent implements OnInit {

  user:               Observable<firebase.User>;
  id:                 any;
  workshop:           Workshop;
  emailLoggedUser:    any;
  nameLoggedUser:     any;
  surnameLoggedUser:  any;
  newItem             ='';
  listOfQuestions:    any;


  constructor(
    public  afAuth:           AngularFireAuth,
    private firebaseService:  FirebaseService,
    private router:           Router,
    private route:            ActivatedRoute
  ) {

        this.user             = afAuth.authState;
        this.emailLoggedUser  = this.afAuth.auth.currentUser.email;
        this.nameLoggedUser  = this.afAuth.auth.currentUser.displayName;
  }

  addItem() {
    if ( this.newItem !== '' ) {
      console.log('Add item: ', this.newItem);
      var newMessage:  Message = {
        message: this.newItem,
        author: this.nameLoggedUser,
        email: this.emailLoggedUser
      };
      console.log(newMessage);
      this.firebaseService.addQuestion(newMessage);
      this.newItem = '';
    } else {
      console.log('Try to add empty question!');
    }
  }

  removeItem(question) {
    console.log('Remove Question!');
    console.log(question);
    this.firebaseService.removeQuestion(question);
    //this.listOfQuestions.splice(index, 1);
  }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    console.log('Workshop id: ' + this.id);

    this.firebaseService.getWorkshopDetails(this.id).subscribe(workshop => {
      this.workshop = workshop;
    });

    this.firebaseService.getWorkshopQuestions(this.id).subscribe(workshops => {
      this.listOfQuestions = workshops;
    });
  }
}

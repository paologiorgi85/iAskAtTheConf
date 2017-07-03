import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Injectable, Injector }    from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public  flashMessage: FlashMessagesService
  ) { }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((success) => {
      console.log('Email logged user:' + this.afAuth.auth.currentUser.email);
      this.router.navigate(['workshops']);
    });
  }

  ngOnInit() {

  }

}

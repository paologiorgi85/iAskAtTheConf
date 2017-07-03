import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import {RouterModule, Routes, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  displayName;

  user: Observable<firebase.User>;
  email;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService
  ) {
    this.user = afAuth.authState;
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((success) => {
      console.log('Email logged user:' + this.afAuth.auth.currentUser.email);
      this.router.navigate(['workshops']);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then((success) => {
      this.router.navigate(['']);
    });
    this.flashMessage.show('You are logged out',
      {cssClass: 'alert-success', timeout: 3000});
  }

  ngOnInit() { }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import * as firebase from 'firebase/app';

import { environment } from '../environments/environment';

import { FirebaseService } from './services/firebase.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { QuestionComponent } from './components/question/question.component';

import { NgSpinKitModule } from 'ng-spin-kit'

const AppsRoutes: Routes = [
  { path:'', component: HomeComponent},
  { path:'workshops', component: WorkshopsComponent},
  { path:'workshop/:id', component: WorkshopComponent},
  { path:'workshop/:id/questions/:qid', component: QuestionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WorkshopsComponent,
    WorkshopComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppsRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    NgSpinKitModule
  ],
  exports: [ RouterModule ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

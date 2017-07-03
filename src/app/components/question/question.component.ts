import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message } from '../../interfaces/workshop';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  id:any;
  qid:any;
  question:Message;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  this.id = this.route.snapshot.params['id'];
  this.qid = this.route.snapshot.params['qid'];
  console.log('Workshop id: '+ this.id + 'Question id: '+ this.qid);

    this.firebaseService.getMessageDetails(this.id,this.qid).subscribe(question => {
    this.question = question;
    console.log('Object Question:');
    console.log(this.question);
    console.log('List of Questions: ');
    console.log(this.question.answers);
    });

  }

}

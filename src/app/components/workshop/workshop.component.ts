import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})

export class WorkshopComponent implements OnInit {

  id:any;
  workshop:any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.firebaseService.getWorkshopDetails(this.id).subscribe(workshop => {
        this.workshop = workshop;
        console.log(workshop);
      });

  }

}

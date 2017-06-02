import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  workshops:any;

  constructor(private firebaService:FirebaseService) { }

  ngOnInit() {
    this.firebaService.getWorkshops().subscribe(workshops => {
      console.log(workshops);
      this.workshops = workshops;
    });
  }

}

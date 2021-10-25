import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {

  public teamdetails :any=[];
  constructor(private _teamservice : TeamsService) { }

  ngOnInit() {
    this._teamservice.getteams()
    .subscribe(data =>this.teamdetails = data);
  }
}

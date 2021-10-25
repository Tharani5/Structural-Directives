import { Component, OnInit } from '@angular/core';
import { Teams } from '../team';
import { TeamsService } from '../teams.service';


@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {

  public teamnames : any=[];
  public errormsg="";
  //public hello: { no: number, tname: string, color:string }[]=[];
  constructor(private _teamsservice: TeamsService) { }

  ngOnInit(){
   this._teamsservice.getteams()
   .subscribe(datas  =>this.teamnames = datas,  
              error => this.errormsg =error);
  }

}

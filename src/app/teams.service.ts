import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Teams } from './team';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
import { map,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private _url: string="/assets/data/teams1.json";
  constructor(private http: HttpClient) { }

  getteams() : Observable<Teams[]>
  {
    return this.http.get<Teams[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error : HttpErrorResponse)
   {
    return throwError(error.message); 
  }  
}
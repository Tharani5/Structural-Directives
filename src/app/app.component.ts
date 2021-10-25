import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div *ngIf="true; then trueblock; else falseblock">  </div>
  <ng-template #trueblock>
  <p>trueblock<p>
  </ng-template>
  <ng-template #falseblock>
  <p>elseblock</p>
  </ng-template>

  <div [ngSwitch]="team">
  <div *ngSwitchCase="'mi'">Mumbai indians</div>
  <div *ngSwitchCase="'csk'">Chennai</div>
  <div *ngSwitchDefault> choose any team</div>
  </div>
  
  <div *ngFor="let team of number;index as i">
  {{i}}  {{team}}
  </div>
  
  <app-sample (childproperty)="display=$event" [winner]="team"></app-sample><br>
  {{display}}

  {{pipes | slice : 2:9}}<br>
  {{value| currency : 'INR'}}

  <app-teamdetails></app-teamdetails>
  <app-teamlist></app-teamlist>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StructuralDirectives';
  public team="mi";
  public number=["mi","csk","kkr","rcb"];
  public display="";
  public pipes="How are u?";
  public value=10;
}

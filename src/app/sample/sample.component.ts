import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sample',
  template: `
  <h2>welcome</h2>
  {{"hello "+ champ}}
  
  <button (click)="winners()">winner of year</button>
  `,
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  @Input('winner') public champ="";
  @Output() public childproperty=new EventEmitter();
  constructor() { }
  winners()
  {
    this.childproperty.emit('2020 Mumbai indians');
  }
  ngOnInit(): void {
  }

}

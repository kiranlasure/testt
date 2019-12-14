import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})
export class MsgComponent implements OnInit {

  FirstName: String = "Kiran";
  LastName: String = "Lasure"; // write here and use this in view

  firstName1: String = "Karan";
  height: number= 30;
  constructor() { }

  ngOnInit() {

  }
  Clickme()
  {
    alert("This way we can perform Event Binding.");
  }

}

import { Component, OnInit } from '@angular/core';
// import { User } from '../user';
// import { EnrollnmentService } from '../enrollnment.service';
// import { error } from 'util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name= "kiran";
  para1 = "This is my first web page using an angular cli. I give overflow: scroll property to this";
  para2 = "This is my first web page using an angular cli. I give overflow: scroll property to this";

  // topics =[
  //   'Angular','react','View'
  // ];
  // userModel = new User('','kiranlasure95@gmail.com',7773906426,'Angular','morning', true);

  // constructor(private _erollmentservice: EnrollnmentService) { }

  constructor(){}

  ngOnInit() {
  }
  // onSubmit(){
  //   this._erollmentservice.enroll(this.userModel)
  //   .subscribe(
  //     data => console.log('success',data),
  //     error => console.log('error',error) 
  //   )
  // }

    greet()
    {
        alert("Hi");
    }
}

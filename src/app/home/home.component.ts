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


  products = [];

  title = 'Products';
  // topics =[
  //   'Angular','react','View'
  // ];
  // userModel = new User('','kiranlasure95@gmail.com',7773906426,'Angular','morning', true);

  // constructor(private _erollmentservice: EnrollnmentService) { }

  constructor(){}

  ngOnInit() {
    this.products = this.getProducts();
  }
  // onSubmit(){
  //   this._erollmentservice.enroll(this.userModel)
  //   .subscribe(
  //     data => console.log('success',data),
  //     error => console.log('error',error) 
  //   )
  // }

  getProducts() {

    return [

        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },

        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },

        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },

        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },

        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },

    ];

  }

    greet()
    {
        alert("Hi");
    }
    displayCounter(count)
    {
      console.log(count);
    }
}

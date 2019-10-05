import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <h2> This Is Department-List Component</h2>
  `,
  styles: ["h2{ color:red}"
  ]
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

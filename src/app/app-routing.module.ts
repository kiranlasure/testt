import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MsgComponent } from './msg/msg.component';


// Remember the Path some eror are occure due Mismatch in path.


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'msg',component:MsgComponent}
   // Not specify the path for first because it is Home Page.
  // {path:'home', component: Login2Component},
  
];

// Routes : is is the array of the path 
// It Takes path name that we can specify at the time of navigation
// 2nd Parameter is component Name. i.e which component we want to render.

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Import the above array Here
  ],

  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent,MsgComponent]
// We can can create Array of Component and we have to import that path in your module. ts file.
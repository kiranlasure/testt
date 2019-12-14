import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MsgComponent } from './msg/msg.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

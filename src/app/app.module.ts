import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
export const firebaseConfig = {
  apiKey: "AIzaSyAzLd3WxPsniUDGbkJSbFkx93SRHw6hwaE",
  authDomain: "practice-javascript.firebaseapp.com",
  databaseURL: "https://practice-javascript.firebaseio.com",
  storageBucket: "practice-javascript.appspot.com",
  messagingSenderId: "520134985447"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

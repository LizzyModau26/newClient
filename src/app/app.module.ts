import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFirestoreModule , ReactiveFormsModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyAH1J0IqqQxPKXyna_ZxDuqGIhyIU2ov8Q",
    authDomain: "resturantapp-ff840.firebaseapp.com",
    databaseURL: "https://resturantapp-ff840.firebaseio.com",
    projectId: "resturantapp-ff840",
    storageBucket: "resturantapp-ff840.appspot.com",
    messagingSenderId: "394329198405",
    appId: "1:394329198405:web:5e0d91c204739edbe4f82c",
    measurementId: "G-BQ93Y2M1E2"
  })],
  providers: [
    FirebaseService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import {Router} from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  resID : any
  store : any
  constructor(private router : Router, private firestore : AngularFirestore) { }

  ngOnInit() {
    var user = firebase.auth().currentUser
    this.resID = user.uid;

    firebase.firestore().collection('resturants').doc(this.resID).get().then(snapshot => {
      this.resID =snapshot.data();
    })
  }

}

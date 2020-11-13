import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../app/services/firebase.service';

import firebase from 'firebase/app';
import 'firebase/firestore';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  booking: Array<any> = [];
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    let user = firebase.auth().currentUser.uid
    console.log('user: ', user)
    // let user = firebase.auth().currentUser.uid

    firebase.firestore().collection('resturants').doc(user).collection('bookings').where('resID', '==', user).onSnapshot(res => {
      res.forEach(element => {
        this.booking.push(Object.assign(element.data(), { uid: element.id }));
        console.log('uuu: ' + { uid: element.id })
        console.log('booking: ' + this.booking)
        console.log('u: ' + element.id)
      })
    })
  }
}


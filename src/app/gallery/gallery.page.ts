import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from "../services/firebase.service";

import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {


  galleryForm: FormGroup
  resID: any
  selectedFile: File = null;
  upLoadedFile: any;
  dishlist: Array<any> = []


  constructor(public firebaseService: FirebaseService,
    public firestore: AngularFirestore, private fb : FormBuilder, private router : Router


  ) { }


  ngOnInit() {

    var user = firebase.auth().currentUser
      this.resID = user.uid;
      console.log('id: ', this.resID)
  
      firebase.firestore().collection('resturants').doc(this.resID).collection('dishes').get().then(snapshot =>{
        snapshot.docs.forEach(dishes => {
          this.dishlist.push(dishes.data())
          console.log('dishes: ', this.dishlist)
        })
      })

    this.EditProPage();
    
  }

  EditProPage(){
    this.galleryForm = this.fb.group({
      dishName: new FormControl(),
      dishPrice: new FormControl(),
      dishDes: new FormControl(),
      dishimg: new FormControl(),
    })
  }
  addGallery() {
    var user = firebase.auth().currentUser
    this.resID = user.uid;

    this.firestore.collection('resturants/' + this.resID + '/dishes').add({
      resID: this.resID,
      dishName: this.galleryForm.value.dishName,
      dishDes: this.galleryForm.value.dishDes,
      dishPrice: this.galleryForm.value.dishPrice,
      dishimg: this.galleryForm.value.dishimg,
     }).then(function (docRef) {
      console.log('Successful, docRef.id' );
    })
    this.galleryForm.reset();
    
  }

  addPic(event) {
    const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadstart = (p) => {
        console.log(p);
      };
      reader.onloadend = (e) => {
        console.log(e.target);
        this.upLoadedFile = reader.result;
        this.galleryForm.get('dishimg').setValue(this.upLoadedFile);
        
      };
    }
    RemoveItem() {
      this.firebaseService.delete_Items()
  
}
}



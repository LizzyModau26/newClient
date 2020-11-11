
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from "../services/firebase.service";

import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {


  profileForm: FormGroup
  resID: any
  selectedFile: File = null;
  upLoadedFile: any;



  constructor(public firebaseService: FirebaseService,
    public firestore: AngularFirestore, private fb : FormBuilder, private router : Router


  ) { }


  ngOnInit() {
    this.EditProPage();
  }

  EditProPage(){
    this.profileForm = this.fb.group({
      resName: new FormControl(),
      resAdd: new FormControl(),
      resDes: new FormControl(),
      resReg: new FormControl(),
      resEmail: new FormControl(),
      resRate: new FormControl(),
      resTel: new FormControl(),
      img: new FormControl(),
    })
  }
  addRes() {
    var user = firebase.auth().currentUser
    this.resID = user.uid;

    this.firebaseService.addProfile().doc(this.resID).set({
      resID: this.resID,
      resName: this.profileForm.value.resName,
      resAdd: this.profileForm.value.resAdd,
      resDes: this.profileForm.value.resDes,
      resEmail: this.profileForm.value.resEmail,
      resTel: this.profileForm.value.resTel,
      resRate: this.profileForm.value.resRate,
      resReg: this.profileForm.value.resReg,
      img: this.profileForm.value.img,
     }).then(function (docRef) {
      console.log('Successful, docRef.id' );
    })
    this.profileForm.reset();
    this.router.navigate(["profile"]);
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
        this.profileForm.get('img').setValue(this.upLoadedFile);
        
      };
    }
}


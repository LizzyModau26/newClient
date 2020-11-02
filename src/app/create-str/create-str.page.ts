import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-str',
  templateUrl: './create-str.page.html',
  styleUrls: ['./create-str.page.scss'],
})
export class CreateStrPage implements OnInit {

  isSignedIn = false
    constructor(public firebaseService : FirebaseService,
      public router : Router) { }
  
    ngOnInit() {
      if(localStorage.getItem('user')!== null)
      this.isSignedIn = true
      else
      this.isSignedIn = false
    }
  
    async onSignUp(email :string, password: string){
      await this.firebaseService.signUp(email,password)
      if(this.firebaseService.isLoggedIn)
      this.router.navigate(["login"]);
    }
    
  
    
  }
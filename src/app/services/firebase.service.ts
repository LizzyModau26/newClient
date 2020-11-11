import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


 

isLoggedIn = false





  constructor(public firesbaseAuth : AngularFireAuth,public firestore: AngularFirestore) { }
  async signIn(email: string , password: string,){
    await this.firesbaseAuth.signInWithEmailAndPassword(email,password).then(res =>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  async signUp(email: string , password: string,){
    await this.firesbaseAuth.createUserWithEmailAndPassword(email,password).then(res =>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  logOut(){
    this.firesbaseAuth.signOut()
    localStorage.removeItem('user')
  }

  addProfile(){
    return this.firestore.collection('resturants')
  }
     

  viewProfile(){
    
      return this.firestore.collection('resturants').doc('user.id').snapshotChanges();
    }
}

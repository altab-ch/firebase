import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

/*
  Generated class for the Profil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html'
})
export class ProfilPage {

  name: any;
  id: any;
  photoURL: any;
  email: any;
  item: FirebaseObjectObservable<any>;
  emailobs: any;

  constructor(public navCtrl: NavController, private af: AngularFire) {
    this.name = firebase.auth().currentUser.displayName;
    this.id = firebase.auth().currentUser.uid;
    this.photoURL = firebase.auth().currentUser.photoURL;
    this.email = firebase.auth().currentUser.email;
    this.item = af.database.object('/users/'+firebase.auth().currentUser.uid);
    
  }

  ionViewDidLoad() {
    console.log('Hello ProfilPage Page');
  }

}

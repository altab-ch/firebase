import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from "ionic-native";

/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  public base64Image: string;

  constructor(public navCtrl: NavController) {
    this.base64Image = "https://placehold.it/150x150";
  }

  public takePicture() {
        Camera.getPicture({
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            saveToPhotoAlbum: false
        }).then(imageData => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }

  ionViewDidLoad() {
    console.log('Hello CameraPage Page');
  }

}

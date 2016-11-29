import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { ProfilPage } from '../profil/profil';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor() {
    this.tab1 = HomePage;
    this.tab2 = MapPage;
    this.tab3 = ProfilPage;
    this.tab4 = CameraPage;
  }

  ionViewDidLoad() {
    console.log('Hello TabsPage Page');
  }

}

import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker,
         MarkerIcon, GoogleMapsAnimation, MyLocation, HtmlInfoWindow } from '@ionic-native/google-maps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map: any;
  log: string;

  constructor(private platform: Platform) { }

  ngOnInit() {
    this.log = '';

    this.platform.ready().then(() => {
      this.log += 'this.platform.ready()<br />';
      this.initMap();
    });
    
  }

  private initMap(){

      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: 40.416775,
            lng: -3.703790
          },
          zoom: 10,
          tilt: 30
        }
      });

      this.log += 'calling getMyLocation<br />';

      this.map.getMyLocation().then((location: MyLocation) => {
        this.log += 'getMyLocation ok<br />';
      }).catch(err => {
        this.log += 'getMyLocation CATCH<br />';
        console.log('ERROR ========================');
        console.log(err.error_message);
      });
  }

}

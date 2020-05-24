/*Appaprently this app cannot import AngularFirestore. It causes an error message:
"Firebase: Firebase service named 'firestore' already registered (app/duplicate-service)."
*/

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
//import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  items: Observable<any>;
  constructor(
    //firestore: AngularFirestore,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    //this.items = firestore.collection('items').valueChanges();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }


}

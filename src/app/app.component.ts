import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EWA-Application';

  constructor() {
  }

  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyCKMJ7IDDBPSJNT0FNasMNsDo-9w3QO5bI",
      authDomain: "klmewa.firebaseapp.com",
      databaseURL: "https://klmewa.firebaseio.com",
      projectId: "klmewa",
      storageBucket: "klmewa.appspot.com",
      messagingSenderId: "876043107626",
      appId: "1:876043107626:web:911d1567bbd57f43507253",
      measurementId: "G-C9RGETWND2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

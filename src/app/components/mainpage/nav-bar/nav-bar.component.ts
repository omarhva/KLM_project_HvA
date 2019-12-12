import {Component, OnInit} from '@angular/core';
import {ServicefbService} from "../../../services/servicefb.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: ServicefbService) {
  }

  ngOnInit() {
  }

  resetHighlights(){
    document.getElementById('nav-general-tab').setAttribute('aria-selected', String(true));
    document.getElementById('nav-general-tab').setAttribute('class', 'nav-item');
  }
}

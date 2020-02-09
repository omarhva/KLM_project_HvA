import {Component, OnInit} from '@angular/core';
import {ServicefbService} from "../../../services/servicefb.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public auth: ServicefbService) {
  }

  ngOnInit() {
  }

  resetHighlights(){
    document.getElementById('nav-general-tab').setAttribute('aria-selected', String(true));
    document.getElementById('nav-general-tab').setAttribute('class', 'nav-item');
  }
  isLogged() {
    if (
      this.auth.returncurrentUser() != null
    ) {return true;
    }
  }

}

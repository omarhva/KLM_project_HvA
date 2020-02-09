import {Component, OnInit} from '@angular/core';
import {ServicefbService} from "../../../services/servicefb.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[NgForm]
})
export class HomeComponent implements OnInit {


  constructor(public servicefbService: ServicefbService) {
  }

  ngOnInit() {
  }

  onSigIn(form: NgForm) {
    const username = form.value.username;
    const psw = form.value.psw;
    this.servicefbService.signIn(username, psw);


  }
  isLogged() {
    if (
      this.servicefbService.returncurrentUser() != null
    ) {return true;
    }
  }


}

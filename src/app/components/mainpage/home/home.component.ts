import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServicefbService} from "../../../services/servicefb.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // constructor(private router: Router) {
  // }
  constructor(public servicefbService: ServicefbService) {
  }

  ngOnInit() {
  }

  onSigIn(form: NgForm) {
    const username = form.value.username;
    const psw = form.value.psw;
    this.servicefbService.signIn(username, psw);
    console.log(username + ' and ' + psw);

  }

  navigateToUserRole() {
    //if(user == mechanic)
    //this.router.navigateByUrl('/mechanic');
    //if(user == maintenance)
  }

}

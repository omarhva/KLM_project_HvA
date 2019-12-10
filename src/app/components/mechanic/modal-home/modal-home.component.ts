import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../../../_modal";




@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css']
})
export class ModalHomeComponent implements OnInit {


  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }


}

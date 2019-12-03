import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from "../../../../_modal";
import {EquipmentModel} from "../../../models/equipmentModel";



@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css']
})
export class ModalHomeComponent implements OnInit {


  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

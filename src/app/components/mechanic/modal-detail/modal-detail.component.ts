import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../../services/equipmentService.service";
import {ModalService} from "../../../../_modal";


@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css']
})
export class ModalDetailComponent implements OnInit {


  constructor(private equipmentService: EquipmentService, private modalService: ModalService) {
  }

  ngOnInit() {
    //this.equipmentService.equipmentNr = this.equipmentService.index;
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

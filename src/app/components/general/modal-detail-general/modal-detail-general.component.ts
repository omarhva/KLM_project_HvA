import { Component, OnInit } from '@angular/core';
import {EquipmentModel} from "../../../models/equipmentModel";
import {EquipmentService} from "../../../services/equipmentService.service";
import {ModalService} from "../../../../_modal";

@Component({
  selector: 'app-modal-detail-general',
  templateUrl: './modal-detail-general.component.html',
  styleUrls: ['./modal-detail-general.component.css']
})
export class ModalDetailGeneralComponent implements OnInit {

  public equipmentList: EquipmentModel[];

  constructor(private equipmentService: EquipmentService, private modalService: ModalService) {
  }

  ngOnInit() {
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.equipmentService.frequency = 0;
  }
}

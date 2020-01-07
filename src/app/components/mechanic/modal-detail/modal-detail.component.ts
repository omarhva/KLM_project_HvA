import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../../services/equipmentService.service";
import {ModalService} from "../../../../_modal";
import {EquipmentModel} from "../../../models/equipmentModel";


@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css']
})
export class ModalDetailComponent implements OnInit {


  public equipmentList: EquipmentModel[];

  constructor(private equipmentService: EquipmentService, private modalService: ModalService) {
  }

  ngOnInit() {
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "../../../services/equipmentService.service";

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.css']
})
export class ModalDetailComponent implements OnInit {

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
  }

}

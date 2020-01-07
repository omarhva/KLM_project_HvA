import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "../../../services/equipmentService.service";

@Component({
  selector: 'app-modal-home-general',
  templateUrl: './modal-home-general.component.html',
  styleUrls: ['./modal-home-general.component.css']
})
export class ModalHomeGeneralComponent implements OnInit {

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
  }

}

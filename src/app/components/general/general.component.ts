import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";
import {EquipmentModel} from "../../models/equipmentModel";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  public equipmentsList: EquipmentModel[];

  constructor(private equipmentService: EquipmentService) {

    this.equipmentsList = equipmentService.getEquipmentList()
  }

  ngOnInit() {
  }

}

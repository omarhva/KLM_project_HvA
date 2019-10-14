import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";
import {EquipmentModel} from "../../models/equipmentModel";

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent implements OnInit {

  public equipmentList: EquipmentModel[];

  constructor(private equipmentService: EquipmentService) {
    this.equipmentList = this.equipmentService.getEquipmentList();
  }

  ngOnInit() {


  }


}

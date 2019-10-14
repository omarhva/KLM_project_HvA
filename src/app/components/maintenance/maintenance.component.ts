import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";
import {EquipmentModel} from "../../models/equipmentModel";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {


  public equipmentList: EquipmentModel[];
  public index: number;


  constructor(private equipmentService: EquipmentService) {
    this.equipmentList = this.equipmentService.getEquipmentList();
  }

  ngOnInit() {
  }

  repaired(index: number) {
    this.equipmentService.getEquipmentList().splice(index, 1);
    console.log(index);
  }

}

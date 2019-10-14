import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {


  constructor(private equipmentService: EquipmentService) {
  }

  ngOnInit() {
  }

}

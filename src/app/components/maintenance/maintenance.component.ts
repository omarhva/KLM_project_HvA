import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";
import {EquipmentModel} from "../../models/equipmentModel";
import {ServicefbService} from "../../services/servicefb.service";
import {Motortypes} from "../mechanic/mock/mock-motortype";
import {MotorT} from "../mechanic/mock/motortype";
import {Dept} from "../mechanic/mock/department";
import {Departments} from "../mechanic/mock/mock-departments";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {


  public equipmentList: EquipmentModel[];
  public index: number;

  listDepartments = Departments;
  selectedDept: Dept;

  listMotortypes = Motortypes;
  selectedMoto: MotorT;


  constructor(private equipmentService: EquipmentService, private auth: ServicefbService) {
  }

  ngOnInit() {
    this.equipmentService.getAllEquipment().subscribe(response =>{
      this.equipmentList = response;
      console.log(this.equipmentList);
    });
  }

  onSelect(dept: Dept): void {
    this.selectedDept = dept;
    console.log("Value department: " + dept.name);
  }

  onSelectMotor(motorT: MotorT) {
    this.selectedMoto = motorT;
    console.log("Value motortype: " + motorT.name);
  }

  updateUnqiueEquipment(repairedEquipment: EquipmentModel) {
     this.equipmentService.updateUnqiueEquipment(repairedEquipment).subscribe(response => {
     });
  }




}

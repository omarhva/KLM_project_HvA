import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";
import {EquipmentModel} from "../../models/equipmentModel";
import {FormControl} from "@angular/forms";

import {Departments} from "./mock/mock-departments";
import {Dept} from "./mock/department";
import {MotorT} from "./mock/motortype";
import {Motortypes} from "./mock/mock-motortype";

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})

export class MechanicComponent implements OnInit {

  public equipmentList: EquipmentModel[];
  public searchFieldEquipment;
  public searchFieldLocation;
  public showTable: Boolean;

  listDepartments = Departments;
  selectedDept: Dept;


  listMotortypes = Motortypes;
  selectedMoto: MotorT;


  constructor(private equipmentService: EquipmentService) {
    this.equipmentList = this.equipmentService.getEquipmentList();
  }

  ngOnInit() {
    this.showTable = true;
    this.searchFieldEquipment = new FormControl();
    this.searchFieldLocation = new FormControl();
    this.searchFieldEquipment.valueChanges.subscribe(term => {
      for (let code of this.equipmentService.getEquipmentList()) {
          if (!this.searchFieldEquipment.isEmpty && code.objectDescription.includes(this.searchFieldEquipment.value) &&
            code.department == this.selectedDept.name) {
            this.showTable = false;
          } else if (!code.objectDescription.includes(this.searchFieldEquipment.value) ) {
            this.showTable = true;
          }

        }
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


  checkInputEquipment(value:string){

  }

}

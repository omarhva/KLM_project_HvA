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
  public searchField;
  public showTable: Boolean;

  listDepartments = Departments;
  selectedDept: Dept;

  listMotortypes = Motortypes;
  selectedMoto: MotorT;


  constructor(private equipmentService: EquipmentService) {
    this.equipmentList = this.equipmentService.getEquipmentList();
  }

  onSelect(dept: Dept): void {
    this.selectedDept = dept;
    console.log("Value department: " + dept.name);
  }

  onSelectMotor(motorT: MotorT){
    this.selectedMoto = motorT;
    console.log("Value motortype: " + motorT.name);
  }

  ngOnInit() {

    this.searchField = new FormControl();
    this.searchField.valueChanges.subscribe(term => {
      for (let code of this.equipmentService.getEquipmentList()) {
        if (!this.searchField.isEmpty && code.objectDescription.includes(this.searchField.value)) {
          this.showTable = true;
        } else if (this.searchField.value.isEmpty && !code.objectDescription.includes(this.searchField.value)) {
          this.showTable = false
        }
      }

    });

  }




}

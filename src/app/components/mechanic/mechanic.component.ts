import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";
import {EquipmentModel} from "../../models/equipmentModel";
import {FormControl} from "@angular/forms";

import {Departments} from "./mock/mock-departments";
import {Dept} from "./mock/department";
import {MotorT} from "./mock/motortype";
import {Motortypes} from "./mock/mock-motortype";

import {ModalService} from "../../../_modal";

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})

export class MechanicComponent implements OnInit {
  private specificEquipment;

  public equipmentList: EquipmentModel[];
  public searchFieldEquipment;
  public searchFieldLocation;
  public searchFieldEquipmentNr;
  public showTable: Boolean;
  public filterDescription: Boolean;
  public filterEquipmentNr: Boolean;
  public filterLocation: Boolean;

  listDepartments = Departments;
  selectedDept: Dept;


  listMotortypes = Motortypes;
  selectedMoto: MotorT;



  constructor(private equipmentService: EquipmentService, private modalService: ModalService) {
    this.equipmentList = this.equipmentService.getEquipmentList();
    this.filterDescription = true;
    this.filterEquipmentNr = true;
    this.filterLocation = true;

  }

  ngOnInit() {
    this.showTable = true;
    this.searchFieldEquipment = new FormControl();
    this.searchFieldLocation = new FormControl();
    this.searchFieldEquipmentNr= new FormControl();
  }


  onSelect(dept: Dept): void {
    this.selectedDept = dept;
    console.log("Value department: " + dept.name);
  }

  onClickList(){

  }
  /*-----------------------MODAL STUFF------------------------*/
  openModal(id: string) {
    this.modalService.open(id);
  }
  /*---------------------------------------------------------*/


  onSelectMotor(motorT: MotorT) {
    this.selectedMoto = motorT;
    console.log("Value motortype: " + motorT.name);
  }

  onSelectList(selectedEquipment: EquipmentModel){
    for (let i = 0; i < this.equipmentService.equipmentList.length; i++){
      if (this.equipmentService.equipmentList[i].equipmentNr == selectedEquipment.equipmentNr){

        this.equipmentService.equipmentNr = this.equipmentService.equipmentList[i].equipmentNr;
        this.equipmentService.description = this.equipmentService.equipmentList[i].objectDescription;
        this.equipmentService.imageEquipment = this.equipmentService.equipmentList[i].imageEquipment;

        this.equipmentService.buildingModal = this.equipmentService.equipmentList[i].building;
        this.equipmentService.hangar = this.equipmentService.equipmentList[i].hangar;
        this.equipmentService.departmentModal = this.equipmentService.equipmentList[i].department;
      }
    }
    console.log(this.equipmentService.equipmentNr);
    return selectedEquipment;
  }



//Filter on equipment description on enter. -> Check HTML mechanic.component.html = (change).
  filterOnEquipmentDescription(equip: string) {
    for (let x of this.equipmentService.getEquipmentList()) {
      if (!x.objectDescription.includes(equip)) {
        x.filterEquipDescr = false;
      }

      if (x.objectDescription.includes(equip)) {
        x.filterEquipDescr = true;
      }
    }
  }
// Filter on equipment location on enter
  filterOnEquipmentLocation(equip: string) {
    for (let x of this.equipmentService.getEquipmentList()) {

      if (!x.hangar.includes(equip)) {
        x.filterLocation = false;
      }

      if (x.hangar.includes(equip)) {
        x.filterLocation = true;
      }
    }
  }
  // Filter on equipmentNr on enter
  filterOnEquipmentNr(equip: string) {
    for (let x of this.equipmentService.getEquipmentList()) {
      if (!x.equipmentNr.toString().includes(equip)) {
        x.filterEquipmentNr = false;
      }

      if (x.equipmentNr.toString().includes(equip)) {
        x.filterEquipmentNr = true;
      }
    }
  }
}

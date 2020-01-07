import {ChangeDetectorRef, Component, OnInit, } from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";
import {EquipmentModel} from "../../models/equipmentModel";
import {FormControl} from "@angular/forms";

import {Departments} from "./mock/mock-departments";
import {Dept} from "./mock/department";
import {MotorT} from "./mock/motortype";
import {Motortypes} from "./mock/mock-motortype";

import {ModalService} from "../../../_modal";
import {ServicefbService} from "../../services/servicefb.service";


@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})

export class MechanicComponent implements OnInit {

  public equipmentList: EquipmentModel[];
  public searchFieldEquipment;
  public searchFieldLocation;
  public searchFieldEquipmentNr;
  public showTable: Boolean;

  public mapEquipment = [];



  listDepartments = Departments;
  selectedDept: Dept;

  listMotortypes = Motortypes;
  selectedMoto: MotorT;



  constructor(private equipmentService: EquipmentService, private modalService: ModalService,private auth: ServicefbService) {


  }



  ngOnInit() {

    this.equipmentService.getUnqiueEquipment().subscribe(response =>{
      this.equipmentList = response;
      this.makeMap();

    });



    this.showTable = true;
    this.searchFieldEquipment = new FormControl();
    this.searchFieldLocation = new FormControl();
    this.searchFieldEquipmentNr= new FormControl();
  }



  onSelect(dept: Dept): void {
    this.selectedDept = dept;
  }

  /*-----------------------MODAL STUFF------------------------*/
  openModal(id: string) {
    this.modalService.open(id);

  }
  /*---------------------------------------------------------*/


  onSelectMotor(motorT: MotorT) {
    this.selectedMoto = motorT;
  }

  inUseUniqueEquipment(useEquipment: EquipmentModel) {
    this.equipmentService.inUseUnqiueEquipment(useEquipment).subscribe(response => {
      const key = response['objectDescription'] + response['motorType'] + response['department']['departmentcode'];
      for (let x of this.mapEquipment[key]){
        if (response['equipmentNr'] == x.equipmentNr){
          this.mapEquipment[key].splice(x,1);
        }
      }



    });



  }

  makeMap() {
    for (let i = 0; i < this.equipmentList.length ; i++) {

      const key =  this.equipmentList[i].objectDescription + this.equipmentList[i].motorType +
        this.equipmentList[i].department['departmentcode'];
      if (this.mapEquipment[key]){
        if (this.equipmentList[i].userStatus == 'I'){
          this.mapEquipment[key].push(this.equipmentList[i]);
        }

      } else{
        if (this.equipmentList[i].userStatus == 'I')
        this.mapEquipment[key] = [this.equipmentList[i]];
      }


    }

    console.log('Map',this.mapEquipment);





  }

  onSelectList(selectedEquipment: EquipmentModel){
    for (let i = 0; i < this.equipmentList.length; i++){
      if (this.equipmentList[i].equipmentNr == selectedEquipment.equipmentNr){

        this.equipmentService.equipmentNr = this.equipmentList[i].equipmentNr;
        this.equipmentService.description = this.equipmentList[i].objectDescription;
        this.equipmentService.imageEquipment = this.equipmentList[i].imageEquipment;

        this.equipmentService.buildingModal = this.equipmentList[i].building;
        this.equipmentService.hangar = this.equipmentList[i].hangar;
        // @ts-ignore
        this.equipmentService.departmentModal = this.equipmentList[i].department.departmentcode;



      }


    }

    this.equipmentService.selectedEquipment = selectedEquipment;
    return selectedEquipment;
  }


//Filter on equipment description on enter. -> Check HTML mechanic.component.html = (change).
  filterOnEquipmentDescription(equip: string) {
    for (let x of this.equipmentList) {
      if (!x.objectDescription.includes(equip.toUpperCase())) {
        x.filterEquipDescription = false;
      }

      if (x.objectDescription.includes(equip.toUpperCase())) {
        x.filterEquipDescription = true;
      }
    }
  }
// Filter on equipment location on enter
  filterOnEquipmentLocation(equip: string) {
    for (let x of this.equipmentList) {

      if (!x.hangar.includes(equip.toUpperCase())) {
        x.filterLocation = false;
      }

      if (x.hangar.includes(equip.toUpperCase())) {
        x.filterLocation = true;

      }
    }
  }

  // Filter on equipmentNr on enter
  filterOnEquipmentNr(equip: string) {

    for (let x of this.equipmentList) {
      if (!x.equipmentNr.toString().includes(equip.toUpperCase())) {
        x.filterEquipmentNr = false;
      }

      if (x.equipmentNr.toString().includes(equip.toUpperCase())) {
        x.filterEquipmentNr = true;

      }
    }
  }
}

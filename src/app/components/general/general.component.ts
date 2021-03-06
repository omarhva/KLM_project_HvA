import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";
import {EquipmentModel} from "../../models/equipmentModel";
import {FormControl} from "@angular/forms";
import {Departments} from "../mechanic/mock/mock-departments";
import {Dept} from "../mechanic/mock/department";
import {Motortypes} from "../mechanic/mock/mock-motortype";
import {MotorT} from "../mechanic/mock/motortype";
import {ModalService} from "../../../_modal";
import {ServicefbService} from "../../services/servicefb.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  public equipmentList: EquipmentModel[];
  public searchFieldEquipment;
  public searchFieldLocation;
  public searchFieldEquipmentNr;
  public showTable: Boolean;


  listDepartments = Departments;
  selectedDept: Dept;


  listMotortypes = Motortypes;
  selectedMoto: MotorT;


  constructor(private equipmentService: EquipmentService, private modalService: ModalService, private auth: ServicefbService) {


  }

  ngOnInit() {

    this.equipmentService.getAllEquipment().subscribe(response => {
      this.equipmentList = response;
      console.log(this.equipmentList);
    });

    this.showTable = true;
    this.searchFieldEquipment = new FormControl();
    this.searchFieldLocation = new FormControl();
    this.searchFieldEquipmentNr = new FormControl();
  }


  onSelect(dept: Dept): void {
    this.selectedDept = dept;
    console.log("Value department: " + dept.name);
  }

  onClickList() {

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

  onSelectList(selectedEquipment: EquipmentModel) {
    for (let i = 0; i < this.equipmentList.length; i++) {
      if (this.equipmentList[i].equipmentNr == selectedEquipment.equipmentNr) {

        this.equipmentService.equipmentNr = this.equipmentList[i].equipmentNr;
        this.equipmentService.description = this.equipmentList[i].objectDescription;
        this.equipmentService.imageEquipment = this.equipmentList[i].imageEquipment;

        this.equipmentService.buildingModal = this.equipmentList[i].building;
        this.equipmentService.hangar = this.equipmentList[i].hangar;
        // @ts-ignore
        this.equipmentService.departmentModal = this.equipmentList[i].department.departmentcode;

      }


    }
    console.log(this.equipmentService.equipmentNr);
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
        console.log(x.objectDescription.valueOf());
        console.log(equip);
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

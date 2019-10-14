import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";
import {EquipmentModel} from "../../models/equipmentModel";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent implements OnInit {

  public equipmentList: EquipmentModel[];
  public searchField;
  public showTable: Boolean;





  constructor(private equipmentService: EquipmentService) {
    this.equipmentList = this.equipmentService.getEquipmentList();
  }

  ngOnInit() {

    this.searchField = new FormControl();
    this.searchField.valueChanges.subscribe(term => {
      for (let code of this.equipmentService.getEquipmentList()) {
        if (!this.searchField.isEmpty && code.equipmentNr.toString().includes(this.searchField.value)) {
          this.showTable = true;
        } else if (this.searchField.value.isEmpty && !code.equipmentNr.toString().includes(this.searchField.value)) {
          this.showTable = false
        }
      }
      console.log(this.showTable);
      console.log('searching for', term);
      console.log(this.searchField.value);

    });

  }


}

import {Component, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipmentService.service";
import {EquipmentModel} from "../../models/equipmentModel";
import {FormControl} from "@angular/forms";
import {ServicefbService} from "../../services/servicefb.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  public equipmentsList: EquipmentModel[];
  private searchField;
  private showTable: Boolean;

  constructor(private equipmentService: EquipmentService, private auth: ServicefbService) {

    this.equipmentsList = equipmentService.getEquipmentList()
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
      console.log('searching for', term);
      console.log(this.searchField.value);
    });
  }

}

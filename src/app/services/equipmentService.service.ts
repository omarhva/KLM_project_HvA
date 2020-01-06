import {Injectable} from '@angular/core';
import {EquipmentModel} from "../models/equipmentModel";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {


  private _equipmentList: EquipmentModel[];
  public color: string = "";
  public frequency: number = 0;
  public selectedEquipment: EquipmentModel;

  public equipmentNr;
  public description;
  public imageEquipment;

  public buildingModal;
  public hangar;
  public departmentModal;


  constructor(private serverService: HttpClient) {

  }


  getEquipmentList() {
    return this._equipmentList;
  }


  getAllEquipment() {
    return this.serverService.get<EquipmentModel[]>("http://localhost:8085/rest/equipment")
  }

  getUnqiueEquipment() {
    return this.serverService.get<EquipmentModel[]>("http://localhost:8085/rest/equipment/unique")
  }

  updateUnqiueEquipment(repairedEquipment: EquipmentModel) {
    this.serverService.put("http://localhost:8085/rest/equipment/" + repairedEquipment.equipmentNr,
      repairedEquipment).subscribe(response => {
      console.log(response);
    });
    alert("Reload the page to see the updated list")
  }



  checkCode(status: string) {
    switch (status) {
      case "PM1A":
        this.color = "orange";
        break;
      case "PM1":
        this.color = "orange";
        break;
      case "PM1B":
        this.color = "red";
        break;
      default:
        break;

    }
  }

}

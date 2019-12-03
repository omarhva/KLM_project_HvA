import {Injectable} from '@angular/core';
import {EquipmentModel} from "../models/equipmentModel";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  public equipmentList: EquipmentModel[];
  public color: string = "";
  public index;

  public description;
  public imageEquipment;
  public equipmentNr;

  constructor() {


    this.equipmentList = [
      new EquipmentModel(107608, "BUILDUP STAND LPT -80C2", "I",
        "PM2A", null, "LPT", "410", "10", "CF6", "/assets/images/BUILDUP STAND LPT -80C2.jpg"),

      new EquipmentModel(107651, "BUILDUP STAND LPT -80C2", "I T",
        "PM2", null, "LPT", "410", "10", "CF6", "/assets/images/BUILDUP STAND LPT -80C2.jpg"),

      new EquipmentModel(107652, "BUILDUP STAND Core -80C2", "I",
        "PM2A", null, "Core", "410", "10", "CF6", "/assets/images/BUILDUP STAND LPT -80C2.jpg"),

      new EquipmentModel(111283, "BUILDUP STAND LPT -80C2", "I",
        "PM2A", null, "LPT", "410", "10", "GEnX", "/assets/images/BUILDUP STAND LPT -80C2.jpg"),

      new EquipmentModel(102680, "BUILDUP STAND LPT -80E", "I",
        "PM2A", null, "LPT", "410", "10", "GEnX", "/assets/images/BUILDUP STAND LPT -80E.jpg"),

      new EquipmentModel(119851, "BUILDUP STAND LPT -80E", "I",
        "PM2A", null, "LPT", "410", "10", "LEAP", "/assets/images/BUILDUP STAND LPT -80E.jpg"),

      new EquipmentModel(122075, "BUILDUP STAND LPT -80E", "I",
        "PM2A", null, "LPT", "410", "10", "LEAP", "/assets/images/BUILDUP STAND LPT -80E.jpg"),

      new EquipmentModel(122076, "BUILDUP STAND HPT -80E", "I",
        "PM2A", null, "HPT", "410", "10", "CFM", "/assets/images/BUILDUP STAND LPT -80E.jpg"),

      new EquipmentModel(117919, "FIXTURE LIFT LPT DISK STG5", "I T",
        "PM1", 2, "LPT", "410", "10", "CFM", "/assets/images/FIXTURE LIFT LPT DISK STG5.jpg"),

      new EquipmentModel(145705, "FIXTURE LIFT TURNOVER LPT ROTOR DISKS", "I",
        "PM1A", 2, "LPT", "410", "10", "CE9O", "/assets/images/FIXTURE LIFT TURNOVER LPT ROTOR DISKS.jpg"),

      new EquipmentModel(165456, "TRANSPORT & STORAGE STAND LPT SHAFT", "I",
        "PM2A", null, "LPT", "410", "10", "CF6", "/assets/images/TRANSPORT & STORAGE STAND LPT SHAFT.jpg"),

      new EquipmentModel(165457, "TRANSPORT & STORAGE STAND LPT SHAFT", "I",
        "PM2A", null, "LPT", "410", "10", "CF6", "/assets/images/TRANSPORT & STORAGE STAND LPT SHAFT.jpg"),
    ]
  }

  getEquipmentList() {
    return this.equipmentList;
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

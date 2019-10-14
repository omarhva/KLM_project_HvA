import {Injectable} from '@angular/core';
import {EquipmentModel} from "../models/equipmentModel";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {


  public equipmentList: EquipmentModel[];
  public color: string = "";

  constructor() {


    this.equipmentList = [
      new EquipmentModel(107608, "BUILDUP STAND LPT -80C2", "I",
        "PM2A", null, "LPT", "410", "10"),

      new EquipmentModel(107651, "BUILDUP STAND LPT -80C2", "I T",
        "PM2", null, "LPT", "410", "10"),

      new EquipmentModel(107652, "BUILDUP STAND LPT -80C2", "I",
        "PM2A", null, "LPT", "410", "10"),

      new EquipmentModel(111283, "BUILDUP STAND LPT -80C2", "I",
        "PM2A", null, "LPT", "410", "10"),

      new EquipmentModel(102680, "BUILDUP STAND LPT -80E", "I",
        "PM2A", null, "LPT", "410", "10"),

      new EquipmentModel(119851, "BUILDUP STAND LPT -80E", "I",
        "PM2A", null, "LPT", "410", "10"),

      new EquipmentModel(122075, "BUILDUP STAND LPT -80E", "I",
        "PM2A", null, "LPT", "410", "10"),

      new EquipmentModel(122076, "BUILDUP STAND LPT -80E", "I",
        "PM2A", null, "LPT", "410", "10"),

      new EquipmentModel(117919, "FIXTURE LIFT LPT DISK STG5", "I T",
        "PM1", 2, "LPT", "410", "10"),

      new EquipmentModel(145705, "FIXTURE LIFT TURNOVER LPT ROTOR DISKS", "I",
        "PM1A", 2, "LPT", "410", "10"),

      new EquipmentModel(165456, "TRANSPORT & STORAGE STAND LPT SHAFT", "I",
        "PM2A", null, "LPT", "410", "10"),

      new EquipmentModel(165457, "TRANSPORT & STORAGE STAND LPT SHAFT", "I",
        "PM2A", null, "LPT", "410", "10"),
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
      case "PM2A":
        this.color = "green";
        break;
      case "PM2":
        this.color = "green";
        break;
      case "PM1B":
        this.color = "red";
        break;
      default:
        console.log("default");
        break;

    }
  }
}

export class EquipmentModel {

  public equipmentNr: number;
  public objectDescription: string;
  public userStatus: string;
  public code: string;
  public priority: number;
  public department: string;
  public building: string;
  public hangar: string;
  public motorType: string;
  public filterEquipDescription: boolean;
  public filterEquipmentNr: boolean;
  public filterLocation: boolean;
  public imageEquipment: string;




  constructor(equipmentNr: number, objectDescription: string, userStatus: string, code: string, priority: number,
              department: string, building: string, hangar: string, motorType: string, imageEquipment: string) {
    this.equipmentNr = equipmentNr;
    this.objectDescription = objectDescription;
    this.userStatus = userStatus;
    this.code = code;
    this.priority = priority;
    this.department = department;
    this.building = building;
    this.hangar = hangar;
    this.motorType = motorType;
    this.filterEquipDescription = true;
    this.filterEquipmentNr = true;
    this.filterLocation = true;
    this.imageEquipment = imageEquipment;
  }


}

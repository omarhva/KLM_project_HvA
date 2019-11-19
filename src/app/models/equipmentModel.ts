export class EquipmentModel {

  public equipmentNr: number;
  public objectDescription: string;
  public userStatus: string;
  public code: string;
  public priority: number;
  public department: string;
  public building: string;
  public hangar: string;
  public filterEquipDescr: boolean;


  constructor(equipmentNr: number, objectDescription: string, userStatus: string, code: string, priority: number,
              department: string, building: string, hangar: string) {
    this.equipmentNr = equipmentNr;
    this.objectDescription = objectDescription;
    this.userStatus = userStatus;
    this.code = code;
    this.priority = priority;
    this.department = department;
    this.building = building;
    this.hangar = hangar;
    this.filterEquipDescr = true;
  }
}

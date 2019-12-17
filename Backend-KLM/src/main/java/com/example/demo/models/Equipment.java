package com.example.demo.models;

import com.example.demo.models.helper.DataView;
import com.example.demo.models.helper.DepartmentEnum;
import com.example.demo.models.helper.EquipmentEnum;
import com.example.demo.models.helper.MotorEnum;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
public class Equipment {

  @Id
  @JsonView(DataView.DynamicFilter.class)
  private int equipmentNr;
  @JsonView(DataView.DynamicFilter.class)
  private String objectDescription;
  @JsonView(DataView.DynamicFilter.class)
  private EquipmentEnum userStatus;
  @JsonView(DataView.DynamicFilter.class)
  private String code;
  @JsonView(DataView.DynamicFilter.class)
  private int priority;
  @JsonView(DataView.DynamicFilter.class)
  private String building;
  @JsonView(DataView.DynamicFilter.class)
  private String hangar;
  @JsonView(DataView.DynamicFilter.class)
  private MotorEnum motorType;
  @JsonView(DataView.DynamicFilter.class)
  private String imageEquipment;
  @JsonView(DataView.DynamicFilter.class)
  private boolean filterEquipDescription;
  @JsonView(DataView.DynamicFilter.class)
  private boolean filterEquipmentNr;
  @JsonView(DataView.DynamicFilter.class)
  private boolean filterLocation;

  @ManyToOne
  @JsonView(DataView.DynamicFilter.class)
  public DepartmentEnum department;

  public Equipment() {

  }

  public Equipment(int equipmentNr, String objectDescription, EquipmentEnum userStatus, String code, int priority, DepartmentEnum department, String building, String hangar, MotorEnum motorType, String imageEquipment) {
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



  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Equipment)) return false;
    Equipment equipment = (Equipment) o;
    return Objects.equals(getObjectDescription(), equipment.getObjectDescription());
  }

  @Override
  public int hashCode() {
    return Objects.hash(getObjectDescription());
  }

  public long getEquipmentNr() {
    return equipmentNr;
  }

  public void setEquipmentNr(int equipmentNr) {
    this.equipmentNr = equipmentNr;
  }

  public String getObjectDescription() {
    return objectDescription;
  }

  public void setObjectDescription(String objectDescription) {
    this.objectDescription = objectDescription;
  }

  public EquipmentEnum getUserStatus() {
    return userStatus;
  }

  public void setUserStatus(EquipmentEnum userStatus) {
    this.userStatus = userStatus;
  }

  public String getImageEquipment() {
    return imageEquipment;
  }

  public void setImageEquipment(String imageEquipment) {
    this.imageEquipment = imageEquipment;
  }

  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  public int getPriority() {
    return priority;
  }

  public void setPriority(int priority) {
    this.priority = priority;
  }

  public DepartmentEnum getDepartment() {
    return department;
  }

  public void setDepartment(DepartmentEnum department) {
    this.department = department;
  }

  public String getBuilding() {
    return building;
  }

  public void setBuilding(String building) {
    this.building = building;
  }

  public String getHangar() {
    return hangar;
  }

  public void setHangar(String hangar) {
    this.hangar = hangar;
  }

  public MotorEnum getMotorType() {
    return motorType;
  }

  public void setMotorType(MotorEnum motorType) {
    this.motorType = motorType;
  }

  public boolean isFilterEquipDescription() {
    return filterEquipDescription;
  }

  public void setFilterEquipDescription(boolean filterEquipDescription) {
    this.filterEquipDescription = filterEquipDescription;
  }

  public boolean isFilterEquipmentNr() {
    return filterEquipmentNr;
  }

  public void setFilterEquipmentNr(boolean filterEquipmentNr) {
    this.filterEquipmentNr = filterEquipmentNr;
  }

  public boolean isFilterLocation() {
    return filterLocation;
  }

  public void setFilterLocation(boolean filterLocation) {
    this.filterLocation = filterLocation;
  }

  @Override
  public String toString() {
    return "Equipment{" +
      "equipmentNr=" + equipmentNr +
      ", objectDescription='" + objectDescription + '\'' +
      ", userStatus='" + userStatus + '\'' +
      ", code='" + code + '\'' +
      ", priority=" + priority +
      ", department='" + department + '\'' +
      ", building='" + building + '\'' +
      ", hangar='" + hangar + '\'' +
      ", motorType='" + motorType + '\'' +
      '}';
  }

//  @ManyToOne(optional = false)
//  private Department departments;
//
//  public Department getDepartments() {
//    return departments;
//  }
//
//  public void setDepartments(Department departments) {
//    this.departments = departments;
//  }
}

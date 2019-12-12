package com.example.demo.models;

import com.example.demo.models.helper.DataView;
import com.example.demo.models.helper.DepartmentEnum;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Department {


  @Id
  private DepartmentEnum departmentcode;



  @OneToMany(mappedBy = "departments")
  @JsonView(DataView.DynamicFilter.class)
  public List<Equipment> equipment = new ArrayList<>();

  public List<Equipment> getEquipment() {
    return equipment;
  }

  public void setEquipment(List<Equipment> equipment) {
    this.equipment = equipment;
  }

  public Department() {
  }

  public Department(DepartmentEnum departmentcode) {

    this.departmentcode = departmentcode;
  }

  public DepartmentEnum getDepartmentcode() {
    return departmentcode;
  }

  public void setDepartmentcode(DepartmentEnum departmentcode) {
    this.departmentcode = departmentcode;
  }
}


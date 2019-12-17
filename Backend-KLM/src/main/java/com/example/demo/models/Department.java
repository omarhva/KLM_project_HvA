package com.example.demo.models;

import com.example.demo.models.helper.DataView;
import com.example.demo.models.helper.DepartmentEnum;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Department {


  @Id
  private DepartmentEnum departmentcode;



  @OneToMany(mappedBy = "department")
  @JsonBackReference
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

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Department)) return false;
    Department that = (Department) o;
    return getDepartmentcode() == that.getDepartmentcode() &&
      Objects.equals(getEquipment(), that.getEquipment());
  }

  @Override
  public int hashCode() {
    return Objects.hash(getDepartmentcode(), getEquipment());
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


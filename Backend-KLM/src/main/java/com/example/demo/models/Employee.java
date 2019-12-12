package com.example.demo.models;


import com.example.demo.models.helper.EmployeeEnum;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Employee {
  @Id
  @GeneratedValue
  private long employeeNr;
  private EmployeeEnum employeeEnum;
  private boolean isAdmin;
  private long password;

  public Employee(){

  }


  public Employee(long employeeNr, EmployeeEnum employeeEnum, boolean isAdmin, long password) {
    this.employeeNr = employeeNr;
    this.employeeEnum = employeeEnum;
    this.isAdmin = isAdmin;
    this.password = password;
  }

  public long getEmployeeNr() {
    return employeeNr;
  }

  public void setEmployeeNr(long employeeNr) {
    this.employeeNr = employeeNr;
  }

  public EmployeeEnum getEmployeeEnum() {
    return employeeEnum;
  }

  public void setEmployeeEnum(EmployeeEnum employeeEnum) {
    this.employeeEnum = employeeEnum;
  }

  public boolean isAdmin() {
    return isAdmin;
  }

  public void setAdmin(boolean admin) {
    isAdmin = admin;
  }

  public long getPassword() {
    return password;
  }

  public void setPassword(long password) {
    this.password = password;
  }
}

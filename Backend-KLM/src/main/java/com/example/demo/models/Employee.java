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

}

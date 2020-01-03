package com.example.demo.models;

import com.example.demo.models.helper.DataView;
import com.example.demo.models.helper.MotorEnum;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
public class MotorType {
  @Id
  private MotorEnum motorEnum;
  @ManyToOne
  @JsonManagedReference
  @JsonView(DataView.DynamicFilter.class)
  public Department department;
  public MotorType(MotorEnum motorEnum) {
    this.motorEnum=motorEnum;
  }
  public MotorType() {}




  public MotorEnum getMotorEnum() {
    return motorEnum;
  }

  public void setMotorEnum(MotorEnum motorEnum) {
    this.motorEnum = motorEnum;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    MotorType motorType = (MotorType) o;
    return motorEnum == motorType.motorEnum;
  }

  @Override
  public int hashCode() {
    return Objects.hash(motorEnum);
  }
}

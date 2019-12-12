package com.example.demo.models;

import com.example.demo.models.helper.MotorEnum;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MotorType {
  @Id
  private MotorEnum motorEnum;

  public MotorType() {
  }

  public MotorEnum getMotorEnum() {
    return motorEnum;
  }

  public void setMotorEnum(MotorEnum motorEnum) {
    this.motorEnum = motorEnum;
  }
}

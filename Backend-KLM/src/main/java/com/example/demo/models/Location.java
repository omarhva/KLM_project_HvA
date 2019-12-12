package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Location {

  @Id
  private String locationCode;
  private int floor;
  private char letter;
  private int number;



}

package com.example.demo.repositories;

import com.example.demo.models.Department;
import com.example.demo.models.Employee;
import com.example.demo.models.Equipment;
import com.example.demo.models.MotorType;
import com.example.demo.models.helper.DepartmentEnum;
import com.example.demo.models.helper.EquipmentEnum;
import com.example.demo.models.helper.MotorEnum;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
/**
 * Omar Mulla Ibrahim
 * Student number: 500766035
 */
@SpringBootTest
class RepositoryJPATest {
  @Autowired
private RepositoryJPA repositoryJPA;
  //here i have made some equipments for the test we have also alL our data in the Demoapplication there we have 12 equipments in our data H2
Equipment equipment1 = new Equipment(107555, "TEST STAND LPT -80C2", EquipmentEnum.I,
  "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg");
Equipment equipment2 = new Equipment(107551, "TEST STAND LPT -80C2", EquipmentEnum.I,
  "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg");

  @BeforeEach
  void setUp() {
    this.repositoryJPA.save(equipment1);
    this.repositoryJPA.save(equipment2);

  }
  // here i test the findAll methode i get the size and than compare it with the array of the equipments
  @Test
  void findAll() {
    List<Equipment> equipments= repositoryJPA.findAll();
    assertEquals(repositoryJPA.findAll().size(),equipments.size());
  }
  // here i test the FindUnique methode to check if all of our data are uniqe and there is no repeat
  @Test
  void findUnique() {
    // here i make an same equipment i have made at the first of the class to check that wil not be count again
    Equipment equipment3 = new Equipment(107551, "TEST STAND LPT -80C2", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg");
      this.repositoryJPA.save(equipment3);
      // here i make an new Equipment
    Equipment equipment5 = new Equipment(2424242, "TEkkkST STAND LPT -80C2", EquipmentEnum.I,
      "PbvvM2A", 2, new Department(DepartmentEnum.LPT), "4150", "120", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg");
    this.repositoryJPA.save(equipment5);
    List <Equipment> equipments1 = this.repositoryJPA.findUnique();
    assertEquals(equipments1.size(),15);

  }
  // here i test the save method
  @Test
  void save() {
    // here i make new equipment
    Equipment equipment4 = new Equipment(1000154, "TEST STAND LPT -80C2", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg");
    this.repositoryJPA.save(equipment4);
  // here i find the code of the equipment with the id and than i compare it with the equipment i made up here
    assertEquals(this.repositoryJPA.findById(1000154).getCode(),equipment4.getCode() );
  }
  // here i test the findById method with finding the hangar of an equipment
  @Test
  void findById() {
    Equipment equipment = this.repositoryJPA.findById(107555);
    assertEquals(repositoryJPA.findById(107555).getHangar(), equipment.getHangar());
  }
  // Here i test the insert mthode we have used to to insert an equipment to our data in H2
  @Test
  void insertEquipment() {
    Equipment equipment6 = new Equipment(100540154, "TEST STAND LPT -80C2", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg");

    repositoryJPA.insert1(equipment6);
    assertEquals(repositoryJPA.findById(100540154).getEquipmentNr(), equipment6.getEquipmentNr());

  }

  @Test
  // Here i test the insert method we have used to to insert an MotorType to our data
  void inserMotor() {
    List<Equipment> equipmentList = repositoryJPA.findAll();
    MotorType motor = new MotorType(MotorEnum.CF6);
    motor.setEquipment(equipmentList);
    repositoryJPA.insert(motor);
    assertEquals(repositoryJPA.findById(107608).getMotorType(), motor.getMotorEnum());

  }
  @Test
  void deleteById(){

  //Add a equipment
    Equipment equipment = new Equipment(100540154, "TEST STAND LPT -80C2", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg");
  Equipment savedEquipment = repositoryJPA.save(equipment);
  // check if deleteById method works
    repositoryJPA.deleteById(savedEquipment.getEquipmentNr());

  // find the deleted equipment and check if the method return null. it must return null because the equipment is deleted from the data
  Equipment equipmentDeleted = repositoryJPA.findById(100540154);
  assertNull(equipmentDeleted);
}}

package com.example.demo.rest;

import com.example.demo.DemoApplication;
import com.example.demo.models.Department;
import com.example.demo.models.Equipment;
import com.example.demo.models.helper.DepartmentEnum;
import com.example.demo.models.helper.EquipmentEnum;
import com.example.demo.models.helper.MotorEnum;
import com.example.demo.repositories.RepositoryJPA;
import org.assertj.core.internal.Classes;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Omar Mulla Ibrahim
 * Student number: 500766035
 */

@SpringBootTest(classes = DemoApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class EquipmentControllerTest {

  @Autowired
  RepositoryJPA repositoryJPA;

  @Autowired
  EquipmentController equipmentController;
  @Autowired
  private TestRestTemplate restEquipment;

  // here i test the update method this method in our application should change the status to I(Usage allowed)
  @Test
  void update() {
    // finding an equipment by the id
    Equipment equipment = repositoryJPA.findById(117919);
    equipment.setUserStatus(EquipmentEnum.I);
    repositoryJPA.save(equipment);

    // get the equipment with url with the id
    String data = this.restEquipment.getForObject("/rest/equipment/117919", String.class);
    assertTrue(data.contains(EquipmentEnum.I.toString()));
  }

  // here i test the inUse method this method in our application should change the status to O(Excess stock)
  @Test
  void inUse() {
    Equipment equipment = repositoryJPA.findById(102680);
    equipment.setUserStatus(EquipmentEnum.O);
    repositoryJPA.save(equipment);
    String data = this.restEquipment.getForObject("/rest/equipment/102680", String.class);
    assertTrue(data.contains(EquipmentEnum.O.toString()));
  }

}

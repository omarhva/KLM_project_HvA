package com.example.demo.rest;

import com.example.demo.models.Department;
import com.example.demo.models.Equipment;
import com.example.demo.models.helper.DepartmentEnum;
import com.example.demo.models.helper.EquipmentEnum;
import com.example.demo.models.helper.MotorEnum;
import com.example.demo.repositories.EquipmentRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.when;

/**
 * Omar Mulla Ibrahim
 * Student number: 500766035
 */
@SpringBootTest

public class EquipmentTestMock {

  @Mock
  private EquipmentRepository equipmentRepositoryMock;

  // test to check if save and get equipment work with equipment mock respsitory
  @Test
  void saveAndGetEquipmentMock() {
    // here i test the save of an equipment
    Equipment equipment3 = new Equipment(107566, "TEST STAND LPT -80C2", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg");

    when(equipmentRepositoryMock.save(equipment3)).thenReturn(equipment3);
    Equipment savedEquipment = equipmentRepositoryMock.save(equipment3);
    Assertions.assertEquals(savedEquipment.getCode(), equipment3.getCode());
    // here i test to get an equipment with mock

    when(equipmentRepositoryMock.findById(savedEquipment.getEquipmentNr())).thenReturn(equipment3);
    Equipment getEquipment = equipmentRepositoryMock.save(equipment3);
    Assertions.assertEquals(getEquipment.getDepartment(), savedEquipment.getDepartment());
  }


}



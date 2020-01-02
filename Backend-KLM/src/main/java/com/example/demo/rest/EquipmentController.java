package com.example.demo.rest;


import com.example.demo.models.Equipment;
import com.example.demo.models.helper.DataView;
import com.example.demo.models.helper.EquipmentEnum;
import com.example.demo.repositories.RepositoryJPA;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class EquipmentController {

  @Autowired
  private RepositoryJPA equipmentRepository;

  public EquipmentController() {

  }

  @GetMapping("/rest/equipment")
//  @JsonView(DataView.DynamicFilter.class)
  public List<Equipment> getAllEquipment() {
    return equipmentRepository.findAll();
  }

  @GetMapping("/rest/equipment/{id}")
  @JsonView(DataView.DynamicFilter.class)
  public Equipment getEquipmentById(@PathVariable long id) {
    return equipmentRepository.findById(id);
  }


  @GetMapping("/rest/equipment/unique")
  public List<Equipment> getAllUniqueEquipment() {
    return equipmentRepository.findUnique();
  }

  @PutMapping("/rest/equipment/{id}")
  @JsonView(DataView.DynamicFilter.class)
  public Equipment update(@PathVariable long id) {
    Equipment equipment1 = equipmentRepository.findById(id);

    equipment1.setUserStatus(EquipmentEnum.I);
    equipmentRepository.save(equipment1);

    return equipment1;
  }

  public Equipment findById(long id) {
    return null;
  }


  public Equipment save() {
    return null;
  }

  public List<Equipment> findAll() {
    return equipmentRepository.findAll();
  }

  public List<Equipment> findUnique() {
    return equipmentRepository.findUnique();
  }
}

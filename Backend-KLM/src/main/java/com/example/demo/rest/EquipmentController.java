package com.example.demo.rest;


import com.example.demo.models.Equipment;
import com.example.demo.repositories.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@RestController
public class EquipmentController implements EquipmentRepository {

    @Autowired
    private EquipmentRepository equipmentRepository;

    public EquipmentController(){

    }

    @GetMapping("/rest/equipment")
    public List<Equipment> getAllEquipment(){
        return equipmentRepository.findAll();
    }

    @Override
    public List<Equipment> findAll() {
        return equipmentRepository.findAll();
    }
}
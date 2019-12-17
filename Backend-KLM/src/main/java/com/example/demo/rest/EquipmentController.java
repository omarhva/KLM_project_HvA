package com.example.demo.rest;


import com.example.demo.models.Equipment;
import com.example.demo.models.helper.DataView;
import com.example.demo.repositories.EquipmentRepository;
import com.example.demo.repositories.RepositoryJPA;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;


@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class EquipmentController implements EquipmentRepository {

    @Autowired
    private RepositoryJPA equipmentRepository;

    public EquipmentController(){

    }

    @GetMapping("/rest/equipment")
    @JsonView(DataView.DynamicFilter.class)
    public List<Equipment> getAllEquipment(){
        return equipmentRepository.findAll();
    }


    @GetMapping("/rest/equipment/unique")
    public List<Equipment> getAllUniqueEquipment() {return  equipmentRepository.findUnique(); }

    @Override
    public List<Equipment> findAll() {
        return equipmentRepository.findAll();
    }

    @Override
    public List<Equipment> findUnique() {
        return equipmentRepository.findUnique();
    }
}

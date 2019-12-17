package com.example.demo.repositories;


import com.example.demo.models.Equipment;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipmentRepository {

 public List<Equipment> findAll();

  List<Equipment> findUnique();

}

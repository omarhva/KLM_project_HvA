package com.example.demo.repositories;


import com.example.demo.models.Equipment;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipmentRepository {

  List<Equipment> findAll();

  List<Equipment> findUnique();

  Equipment save(Equipment equipment);

  Equipment findById(long id);

}

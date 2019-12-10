package com.example.demo.repositories;


import com.example.demo.models.Equipment;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface EquipmentRepository {

    List<Equipment> findAll();

    List<Equipment> findUnique();

}

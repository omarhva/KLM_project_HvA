package com.example.demo;

import com.example.demo.models.Equipment;
import com.example.demo.models.helper.EquipmentEnum;
import com.example.demo.models.helper.MotorEnum;
import com.example.demo.repositories.EquipmentRepository;
import com.example.demo.repositories.RepositoryJPA;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Primary;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
  private Logger logger = LoggerFactory.getLogger(this.getClass());
  @Autowired
  RepositoryJPA equipmentRepository;

  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }

  @Override
  @Transactional

  public void run(String... args) throws Exception {
    logger.info("test -> {}",equipmentRepository.insert(new Equipment("BUILDUP STAND LPT -80C2", EquipmentEnum.I,
      "PM2A", 1, "LPT", "410", "10", MotorEnum.CF6, "/assets/images/BUILDUP STAND LPT -80C2.jpg")));

//    createInitialAEvents();
//    logger.info("All Aeventd ->{}", equipmentRepository.findAll());

  }

//  private void createInitialAEvents() {
//   List<Equipment> equipmentList = this.equipmentRepository.findAll();
////    List<Equipment> equipmentList ;
//
//  equipmentList = new ArrayList<>();
//    equipmentList.add(new Equipment(107608, "BUILDUP STAND LPT -80C2", EquipmentEnum.I,
//      "PM2A", 0, "LPT", "410", "10", MotorEnum.CF6, "/assets/images/BUILDUP STAND LPT -80C2.jpg"));
//
////
////    this.equipmentList.add(new Equipment(107608, "BUILDUP STAND LPT -80C2", EquipmentEnum.I,
////      "PM2A", 0, "LPT", "410", "10", MotorEnum.CF6, "/assets/images/BUILDUP STAND LPT -80C2.jpg"));


  }



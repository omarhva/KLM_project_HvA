package com.example.demo;

import com.example.demo.models.Department;
import com.example.demo.models.Equipment;
import com.example.demo.models.helper.DepartmentEnum;
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
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.Core)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.CRF)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.Fan)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.Motorline)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.HPCRotor)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.HPCStator)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.HPT)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.LPT)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.LPC)));
    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(1,"BUILDUP STAND LPT -80C2", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.Core), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUP STAND LPT -80C2.jpg")));

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



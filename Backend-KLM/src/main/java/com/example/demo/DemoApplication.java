package com.example.demo;

import com.example.demo.models.Department;
import com.example.demo.models.Equipment;
import com.example.demo.models.MotorType;
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
    // Department info invoeren
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.Core)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.CRF)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.Fan)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.Motorline)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.HPCRotor)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.HPCStator)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.HPT)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.LPT)));
    logger.info("test1->{}", equipmentRepository.insert(new Department(DepartmentEnum.LPC)));

    // MotorType info invoeren

//    logger.info("test1->{}", equipmentRepository.insert(new MotorType(MotorEnum.CE9O)));
//    logger.info("test1->{}", equipmentRepository.insert(new MotorType(MotorEnum.CF6)));
//    logger.info("test1->{}", equipmentRepository.insert(new MotorType(MotorEnum.CFM)));
//    logger.info("test1->{}", equipmentRepository.insert(new MotorType(MotorEnum.GEnX)));
//    logger.info("test1->{}", equipmentRepository.insert(new MotorType(MotorEnum.LEAP)));

    // Equipment info invoeren

    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(107608,"BUILDUP STAND LPT -80C2", EquipmentEnum.I,
    "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg")));

    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(107651,"BUILDUP STAND LPT -80C2", EquipmentEnum.IT,
      "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg")));

    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(107652,"BUILDUP STAND LPT -80C2", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.Core), "410", "10", MotorEnum.CF6, "/assets/images/BUILDUPSTANDLPT80C2.jpg")));

    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(111283,"BUILDUP STAND LPT -80C2", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.GEnX, "/assets/images/BUILDUPSTANDLPT80C2.jpg")));


    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(102680,"BUILDUP STAND LPT -80E", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.GEnX, "/assets/images/BUILDUPSTANDLPT80E.jpg")));

    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(119851,"BUILDUP STAND LPT -80E", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.LEAP, "/assets/images/BUILDUP STANDLPT80E.jpg")));


    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(122075,"BUILDUP STAND LPT -80E", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.LEAP, "/assets/images/BUILDUPSTANDLPT80E.jpg")));


    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(122076,"BUILDUP STAND LPT -80E", EquipmentEnum.I,
      "PM2A", 1, new Department(DepartmentEnum.HPT), "410", "10", MotorEnum.CFM, "/assets/images/BUILDUPSTANDLPT80E.jpg")));


    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(117919,"FIXTURE LIFT LPT DISK STG5", EquipmentEnum.IT,
      "PM1", 2, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CFM, "/assets/images/FIXTURELIFTLPTDISKSTG5.jpg")));

    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(145705,"FIXTURE LIFT TURNOVER LPT ROTOR DISKS", EquipmentEnum.I,
      "PM1A", 2, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CE9O, "/assets/images/FIXTURELIFTTURNOVERLPTROTORDISKS.jpg")));

    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(165456,"TRANSPORT & STORAGE STAND LPT SHAFT", EquipmentEnum.I,
      "PM2A", 2, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/TRANSPORTSTORAGESTANDLPTSHAFT.jpg")));

    logger.info("test -> {}",equipmentRepository.insert1(new Equipment(165457,"TRANSPORT & STORAGE STAND LPT SHAFT", EquipmentEnum.I,
      "PM2A", 2, new Department(DepartmentEnum.LPT), "410", "10", MotorEnum.CF6, "/assets/images/TRANSPORTSTORAGESTANDLPTSHAFT.jpg")));




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



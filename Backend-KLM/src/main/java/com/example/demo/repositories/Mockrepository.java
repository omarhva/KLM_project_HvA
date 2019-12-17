//package com.example.demo.repositories;
//
//import com.example.demo.models.Equipment;
//import com.example.demo.models.helper.EquipmentEnum;
//import com.example.demo.models.helper.MotorEnum;
//import org.springframework.context.annotation.Primary;
//import org.springframework.stereotype.Component;
//import org.springframework.stereotype.Repository;
//
//import java.util.ArrayList;
//import java.util.HashSet;
//import java.util.List;
//import java.util.Set;
//
//@Repository
//public class Mockrepository implements EquipmentRepository {
//
//  private List<Equipment> equipmentList;
//  private Set<Equipment> uniqueSet;
//  private List<Equipment> uniqueList;
//
//  public Mockrepository() {
//
//    this.equipmentList = new ArrayList<>();
//
//    this.equipmentList.add(new Equipment(107608, "BUILDUP STAND LPT -80C2", EquipmentEnum.I,
//      "PM2A", 0, "LPT", "410", "10", MotorEnum.CF6, "/assets/images/BUILDUP STAND LPT -80C2.jpg"));
//
//    this.equipmentList.add(new Equipment(107651, "BUILDUP STAND LPT -80C2", EquipmentEnum.I,
//      "PM2", 0, "LPT", "410", "10", MotorEnum.CF6, "/assets/images/BUILDUP STAND LPT -80C2.jpg"));
//
//    this.equipmentList.add(new Equipment(107652, "BUILDUP STAND Core -80C2", EquipmentEnum.I,
//      "PM2A", 0, "Core", "410", "10", MotorEnum.CF6, "/assets/images/BUILDUP STAND LPT -80C2.jpg"));
//
//    this.equipmentList.add(new Equipment(111283, "BUILDUP STAND LPT -80C2", EquipmentEnum.I,
//      "PM2A", 0, "LPT", "410", "10", MotorEnum.GEnX, "/assets/images/BUILDUP STAND LPT -80C2.jpg"));
//
//    this.equipmentList.add(new Equipment(102680, "BUILDUP STAND LPT -80E", EquipmentEnum.I,
//      "PM2A", 0, "LPT", "410", "10", MotorEnum.GEnX, "/assets/images/BUILDUP STAND LPT -80E.jpg"));
//
//    this.equipmentList.add(new Equipment(119851, "BUILDUP STAND LPT -80E", EquipmentEnum.I,
//      "PM2A", 0, "LPT", "410", "10", MotorEnum.LEAP, "/assets/images/BUILDUP STAND LPT -80E.jpg"));
//
//    this.equipmentList.add(new Equipment(122075, "BUILDUP STAND LPT -80E", EquipmentEnum.I,
//      "PM2A", 0, "LPT", "410", "10", MotorEnum.LEAP, "/assets/images/BUILDUP STAND LPT -80E.jpg"));
//
//    this.equipmentList.add(new Equipment(122076, "BUILDUP STAND HPT -80E", EquipmentEnum.I,
//      "PM2A", 0, "HPT", "410", "10", MotorEnum.CFM, "/assets/images/BUILDUP STAND LPT -80E.jpg"));
//
//    this.equipmentList.add(new Equipment(117919, "FIXTURE LIFT LPT DISK STG5", EquipmentEnum.IT,
//      "PM1", 2, "LPT", "410", "10", MotorEnum.CFM, "/assets/images/FIXTURE LIFT LPT DISK STG5.jpg"));
//
//    this.equipmentList.add(new Equipment(145705, "FIXTURE LIFT TURNOVER LPT ROTOR DISKS", EquipmentEnum.I,
//      "PM1A", 2, "LPT", "410", "10", MotorEnum.CE9O, "/assets/images/FIXTURE LIFT TURNOVER LPT ROTOR DISKS.jpg"));
//
//    this.equipmentList.add(new Equipment(165456, "TRANSPORT & STORAGE STAND LPT SHAFT", EquipmentEnum.I,
//      "PM2A", 0, "LPT", "410", "10", MotorEnum.CF6, "/assets/images/TRANSPORT & STORAGE STAND LPT SHAFT.jpg"));
//
//    this.equipmentList.add(new Equipment(165457, "TRANSPORT & STORAGE STAND LPT SHAFT", EquipmentEnum.I,
//      "PM2A", 0, "LPT", "410", "10", MotorEnum.CF6, "/assets/images/TRANSPORT & STORAGE STAND LPT SHAFT.jpg"));
//
//
//    this.uniqueSet = convertArrayToSet(this.equipmentList);
//    this.uniqueList = new ArrayList<>(this.uniqueSet);
//
//  }
//
//  public static <T> Set<Equipment> convertArrayToSet(List<Equipment> array) {
//    return new HashSet<>(array);
//  }
//
//  @Override
//  public List<Equipment> findAll() {
//    return this.equipmentList;
//  }
//
//  @Override
//  public List<Equipment> findUnique() {
//    return this.uniqueList;
//  }
//}

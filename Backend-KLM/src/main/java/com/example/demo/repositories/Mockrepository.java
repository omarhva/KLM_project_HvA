package com.example.demo.repositories;

import com.example.demo.models.Equipment;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Mockrepository implements EquipmentRepository {

    private List<Equipment> equipmentList;

    public Mockrepository(){

        this.equipmentList = new ArrayList<>();

        this.equipmentList.add(new Equipment(107608, "BUILDUP STAND LPT -80C2", "I",
                "PM2A", 0, "LPT", "410", "10", "CF6","/assets/images/BUILDUP STAND LPT -80C2.jpg"));

        this.equipmentList.add(new Equipment(107651, "BUILDUP STAND LPT -80C2", "I T",
                "PM2", 0, "LPT", "410", "10", "CF6","/assets/images/BUILDUP STAND LPT -80C2.jpg"));

        this.equipmentList.add( new Equipment(107652, "BUILDUP STAND Core -80C2", "I",
                "PM2A", 0, "Core", "410", "10", "CF6","/assets/images/BUILDUP STAND LPT -80C2.jpg"));

        this.equipmentList.add(new Equipment(111283, "BUILDUP STAND LPT -80C2", "I",
                "PM2A", 0, "LPT", "410", "10", "GEnX","/assets/images/BUILDUP STAND LPT -80C2.jpg"));

        this.equipmentList.add(new Equipment(102680, "BUILDUP STAND LPT -80E", "I",
                "PM2A", 0, "LPT", "410", "10", "GEnX", "/assets/images/BUILDUP STAND LPT -80E.jpg"));

        this.equipmentList.add(new Equipment(119851, "BUILDUP STAND LPT -80E", "I",
                "PM2A", 0, "LPT", "410", "10", "LEAP", "/assets/images/BUILDUP STAND LPT -80E.jpg"));

        this.equipmentList.add( new Equipment(122075, "BUILDUP STAND LPT -80E", "I",
                "PM2A", 0, "LPT", "410", "10", "LEAP", "/assets/images/BUILDUP STAND LPT -80E.jpg"));

        this.equipmentList.add(new Equipment(122076, "BUILDUP STAND HPT -80E", "I",
                "PM2A", 0, "HPT", "410", "10", "CFM", "/assets/images/BUILDUP STAND LPT -80E.jpg"));

        this.equipmentList.add( new Equipment(117919, "FIXTURE LIFT LPT DISK STG5", "I T",
                "PM1", 2, "LPT", "410", "10", "CFM", "/assets/images/FIXTURE LIFT LPT DISK STG5.jpg"));

        this.equipmentList.add( new Equipment(145705, "FIXTURE LIFT TURNOVER LPT ROTOR DISKS", "I",
                "PM1A", 2, "LPT", "410", "10", "CE9O", "/assets/images/FIXTURE LIFT TURNOVER LPT ROTOR DISKS.jpg"));


        this.equipmentList.add(new Equipment(165456, "TRANSPORT & STORAGE STAND LPT SHAFT", "I",
                "PM2A", 0, "LPT", "410", "10", "CF6", "/assets/images/TRANSPORT & STORAGE STAND LPT SHAFT.jpg"));

        this.equipmentList.add(new Equipment(165457, "TRANSPORT & STORAGE STAND LPT SHAFT", "I",
                "PM2A", 0, "LPT", "410", "10", "CF6", "/assets/images/TRANSPORT & STORAGE STAND LPT SHAFT.jpg"));


    }

    @Override
    public List<Equipment> findAll() {
        return this.equipmentList;
    }
}

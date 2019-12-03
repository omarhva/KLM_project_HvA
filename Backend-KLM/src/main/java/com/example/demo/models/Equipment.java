package com.example.demo.models;

public class Equipment {

    private int equipmentNr;
    private String objectDescription;
    private String userStatus;
    private String code;
    private int priority;
    private String department;
    private String building;
    private String hangar;
    private String motorType;
    private String imageEquipment;
    private boolean filterEquipDescription;
    private boolean filterEquipmentNr;
    private boolean filterLocation;

    public Equipment(int equipmentNr, String objectDescription, String userStatus, String code, int priority, String department, String building, String hangar, String motorType,String imageEquipment) {
        this.equipmentNr = equipmentNr;
        this.objectDescription = objectDescription;
        this.userStatus = userStatus;
        this.code = code;
        this.priority = priority;
        this.department = department;
        this.building = building;
        this.hangar = hangar;
        this.motorType = motorType;
        this.filterEquipDescription = true;
        this.filterEquipmentNr = true;
        this.filterLocation = true;
        this.imageEquipment = imageEquipment;
    }

    public long getEquipmentNr() {
        return equipmentNr;
    }

    public void setEquipmentNr(int equipmentNr) {
        this.equipmentNr = equipmentNr;
    }

    public String getObjectDescription() {
        return objectDescription;
    }

    public void setObjectDescription(String objectDescription) {
        this.objectDescription = objectDescription;
    }

    public String getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(String userStatus) {
        this.userStatus = userStatus;
    }

    public String getImageEquipment() {
        return imageEquipment;
    }

    public void setImageEquipment(String imageEquipment) {
        this.imageEquipment = imageEquipment;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public String getHangar() {
        return hangar;
    }

    public void setHangar(String hangar) {
        this.hangar = hangar;
    }

    public String getMotorType() {
        return motorType;
    }

    public void setMotorType(String motorType) {
        this.motorType = motorType;
    }

    public boolean isFilterEquipDescription() {
        return filterEquipDescription;
    }

    public void setFilterEquipDescription(boolean filterEquipDescription) {
        this.filterEquipDescription = filterEquipDescription;
    }

    public boolean isFilterEquipmentNr() {
        return filterEquipmentNr;
    }

    public void setFilterEquipmentNr(boolean filterEquipmentNr) {
        this.filterEquipmentNr = filterEquipmentNr;
    }

    public boolean isFilterLocation() {
        return filterLocation;
    }

    public void setFilterLocation(boolean filterLocation) {
        this.filterLocation = filterLocation;
    }

    @Override
    public String   toString() {
        return "Equipment{" +
                "equipmentNr=" + equipmentNr +
                ", objectDescription='" + objectDescription + '\'' +
                ", userStatus='" + userStatus + '\'' +
                ", code='" + code + '\'' +
                ", priority=" + priority +
                ", department='" + department + '\'' +
                ", building='" + building + '\'' +
                ", hangar='" + hangar + '\'' +
                ", motorType='" + motorType + '\'' +
                '}';
    }
}

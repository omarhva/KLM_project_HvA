package com.example.demo.repositories;

import com.example.demo.models.Department;
import com.example.demo.models.Equipment;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository()
@Primary
public class RepositoryJPA implements EquipmentRepository {

  @PersistenceContext
  EntityManager em;

  @Override
  public List<Equipment> findAll() {
    TypedQuery<Equipment> query = this.em.createQuery(" SELECT e FROM Equipment e ", Equipment.class);

    return query.getResultList();
  }

  @Override
  public List<Equipment> findUnique() {
    return null;
  }
  public Equipment insert1(Equipment equipment){

    return em.merge(equipment);
  }
  public Department insert(Department department) {
    return em.merge(department);
  }
}

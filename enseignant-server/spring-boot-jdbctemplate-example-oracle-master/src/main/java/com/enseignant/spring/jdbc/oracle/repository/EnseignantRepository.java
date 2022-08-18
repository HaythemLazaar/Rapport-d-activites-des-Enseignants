package com.enseignant.spring.jdbc.oracle.repository;

import java.util.List;

import com.enseignant.spring.jdbc.oracle.model.Enseignant;

public interface EnseignantRepository {
  Enseignant findById(Long id);
  List<Enseignant> findAll();
}

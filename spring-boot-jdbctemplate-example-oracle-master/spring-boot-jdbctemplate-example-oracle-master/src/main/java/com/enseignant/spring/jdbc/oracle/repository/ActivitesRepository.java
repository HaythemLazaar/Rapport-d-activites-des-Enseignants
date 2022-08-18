package com.enseignant.spring.jdbc.oracle.repository;

import java.util.List;

import com.enseignant.spring.jdbc.oracle.model.Encadrement;
import com.enseignant.spring.jdbc.oracle.model.Enseignement;

public interface ActivitesRepository {
    List<Enseignement> findEnseignementById(long id);
    List<Encadrement> findEncadrementById(long id);
}

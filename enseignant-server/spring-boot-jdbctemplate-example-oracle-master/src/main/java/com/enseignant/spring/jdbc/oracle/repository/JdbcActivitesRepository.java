package com.enseignant.spring.jdbc.oracle.repository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.enseignant.spring.jdbc.oracle.model.Encadrement;
import com.enseignant.spring.jdbc.oracle.model.Enseignement;

@Repository
public class JdbcActivitesRepository implements ActivitesRepository{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Enseignement> findEnseignementById(long id) {
        return jdbcTemplate.query("SELECT * FROM ENSEIGNEMENT WHERE id_enseignant=?",
            BeanPropertyRowMapper.newInstance(Enseignement.class), id);
    }

    @Override
    public List<Encadrement> findEncadrementById(long id){
        return jdbcTemplate.query("SELECT * FROM ENCADREMENT WHERE id_enseignant=?",
            BeanPropertyRowMapper.newInstance(Encadrement.class), id);
    }
    
}

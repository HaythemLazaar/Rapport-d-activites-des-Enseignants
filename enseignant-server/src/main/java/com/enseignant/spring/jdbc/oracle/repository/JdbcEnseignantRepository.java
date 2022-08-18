package com.enseignant.spring.jdbc.oracle.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.enseignant.spring.jdbc.oracle.model.Enseignant;

@Repository
public class JdbcEnseignantRepository implements EnseignantRepository {

  @Autowired
  private JdbcTemplate jdbcTemplate;

  @Override
  public Enseignant findById(Long id) {
    try {
      Enseignant en = jdbcTemplate.queryForObject("SELECT * FROM ENSEIGNANT WHERE id=?",
          BeanPropertyRowMapper.newInstance(Enseignant.class), id);

      return en;
    } catch (IncorrectResultSizeDataAccessException e) {
      return null;
    }
  }

  @Override
  public List<Enseignant> findAll() {
    return jdbcTemplate.query("SELECT * from ENSEIGNANT", BeanPropertyRowMapper.newInstance(Enseignant.class));
  }

}

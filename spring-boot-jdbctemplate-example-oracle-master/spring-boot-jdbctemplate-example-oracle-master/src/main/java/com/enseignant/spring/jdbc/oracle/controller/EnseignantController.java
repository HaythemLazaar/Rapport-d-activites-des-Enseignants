package com.enseignant.spring.jdbc.oracle.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enseignant.spring.jdbc.oracle.model.Enseignant;
import com.enseignant.spring.jdbc.oracle.repository.EnseignantRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EnseignantController {

  @Autowired
  EnseignantRepository enseignantRepository;

  @GetMapping("/enseignants")
  public ResponseEntity<List<Enseignant>> getAllEnseignants() {
    try {
      List<Enseignant> enList = new ArrayList<Enseignant>();

      enseignantRepository.findAll().forEach(enList::add);

      if (enList.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(enList, HttpStatus.OK);

    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/enseignants/{id}")
  public ResponseEntity<Enseignant> getEnseignantById(@PathVariable("id") long id) {
    Enseignant en = enseignantRepository.findById(id);

    if (en != null) {
      return new ResponseEntity<>(en, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

}

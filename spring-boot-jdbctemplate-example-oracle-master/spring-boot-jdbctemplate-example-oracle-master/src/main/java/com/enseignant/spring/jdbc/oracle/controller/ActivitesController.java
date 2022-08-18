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

import com.enseignant.spring.jdbc.oracle.model.Encadrement;
import com.enseignant.spring.jdbc.oracle.model.Enseignement;
import com.enseignant.spring.jdbc.oracle.repository.ActivitesRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ActivitesController {
    
    @Autowired
    ActivitesRepository actRepo;

    @GetMapping("/enseignants/{id}/ens")
    public ResponseEntity<List<Enseignement>> getAllEnseignements(@PathVariable("id") long id){
        try {
            List<Enseignement> enList = new ArrayList<Enseignement>();
      
            actRepo.findEnseignementById(id).forEach(enList::add);
            
            if (enList.isEmpty()) {
              return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            
            return new ResponseEntity<>(enList, HttpStatus.OK);
            
          } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
          }
    }

    @GetMapping("/enseignants/{id}/enc")
    public ResponseEntity<List<Encadrement>> getAllEncadrement(@PathVariable("id") long id){
        try {
            List<Encadrement> enList = new ArrayList<Encadrement>();
      
            actRepo.findEncadrementById(id).forEach(enList::add);
            
            if (enList.isEmpty()) {
              return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            
            return new ResponseEntity<>(enList, HttpStatus.OK);
            
          } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
          }
    }

}

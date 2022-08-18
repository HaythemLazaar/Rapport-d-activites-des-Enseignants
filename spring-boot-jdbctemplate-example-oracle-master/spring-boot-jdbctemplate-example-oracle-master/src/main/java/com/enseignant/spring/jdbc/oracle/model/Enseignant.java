package com.enseignant.spring.jdbc.oracle.model;

import org.springframework.data.annotation.Id;

public class Enseignant {

  @Id
  private long id;
  private String nom;
  private String prenom;

  public Enseignant() {

  }
  
  public Enseignant(long id, String nom, String prenom) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
  }

  public Enseignant(String nom, String prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }
  
  public void setId(long id) {
    this.id = id;
  }
  
  public long getId() {
    return id;
  }

  public String getnom() {
    return nom;
  }

  public void setnom(String nom) {
    this.nom = nom;
  }

  public String getprenom() {
    return prenom;
  }

  public void setprenom(String prenom) {
    this.prenom = prenom;
  }


  @Override
  public String toString() {
    return "Enseignant [id=" + id + ", nom=" + nom + ", desc=" + prenom + "]";
  }

}

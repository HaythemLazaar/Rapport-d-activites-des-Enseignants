package com.enseignant.spring.jdbc.oracle.model;

import java.sql.Date;

import org.springframework.data.annotation.Id;

public class Enseignement {
    
    @Id
    private long id;
    private String module;
    private Date date_cours;
    private long duree;
    private long id_enseignant;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public Date getDate() {
        return date_cours;
    }

    public void setDate(Date date_cours) {
        this.date_cours = date_cours;
    }

    public long getDuree() {
        return duree;
    }

    public void setDuree(long duree) {
        this.duree = duree;
    }

    public long getId_enseignant() {
        return id_enseignant;
    }
    
    public void setId_enseignant(long id_enseignant) {
        this.id_enseignant = id_enseignant;
    }

}

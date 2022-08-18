package com.enseignant.spring.jdbc.oracle.model;

import org.springframework.data.annotation.Id;

public class Encadrement {
    
    @Id
    private long id;
    private String date_encadrement;
    private long duree;
    private long id_enseignant;
    
    public long getId_enseignant() {
        return id_enseignant;
    }
    public void setId_enseignant(long id_enseignant) {
        this.id_enseignant = id_enseignant;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getDate_encadrement() {
        return date_encadrement;
    }
    public void setDate_encadrement(String date_encadrement) {
        this.date_encadrement = date_encadrement;
    }
    public long getDuree() {
        return duree;
    }
    public void setDuree(long duree) {
        this.duree = duree;
    }


}

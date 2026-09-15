package com.careconnect.careconnect.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class TrustedContact {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String mobileNumber;
    private String relationship;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore

    private User user;

    public TrustedContact(){

    }

    public TrustedContact(String name, String mobileNumber, String relationship){
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.relationship = relationship;
    }

    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public String getName() {

        return name;
    }

    public void setName(String name) {

        this.name = name;
    }

    public String getMobileNumber() {

        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {

        this.mobileNumber = mobileNumber;
    }

    public String getRelationship() {

        return relationship;
    }

    public void setRelationship(String relationship) {

        this.relationship = relationship;
    }

    public User getUser() {

        return user; }

    public void setUser(User user){

        this.user = user; }
}

package com.careconnect.careconnect.model;


import jakarta.persistence.*;

@Entity
@Table(name = "locations")

public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Long trustedContactId;
    private double latitude;
    private double longitude;
    private String locationName;

    public Location(){
    }

    public Location(Long id, Long userId, Long trustedContactId, double latitude, double longitude, String locationName) {
        this.id = id;
        this.userId = userId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.trustedContactId = trustedContactId;
        this.locationName = locationName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public Long getTrustedContactId() {
        return trustedContactId;
    }

    public void setTrustedContactId(Long trustedContactId) {
        this.trustedContactId = trustedContactId;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }
}

package com.careconnect.careconnect.controller;


import com.careconnect.careconnect.model.Location;
import com.careconnect.careconnect.repository.LocationRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/location")
@CrossOrigin(origins = "*")
public class LocationController {

    private final LocationRepository locationRepository;

    public LocationController(LocationRepository locationRepository){
        this.locationRepository = locationRepository;
    }

    @PostMapping
    public Location saveLocation(@RequestBody Location location){
        return locationRepository.save(location);
    }
}

package com.careconnect.careconnect.controller;


import com.careconnect.careconnect.model.TrustedContact;
import com.careconnect.careconnect.repository.TrustedContactRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/trusted-contacts")
@CrossOrigin

public class TrustedContactController {

    private final TrustedContactRepository repository;

    public TrustedContactController(TrustedContactRepository repository){
      this.repository = repository;
    }

    @GetMapping
    public List<TrustedContact> getAllContacts(){
        return repository.findAll();
    }



}

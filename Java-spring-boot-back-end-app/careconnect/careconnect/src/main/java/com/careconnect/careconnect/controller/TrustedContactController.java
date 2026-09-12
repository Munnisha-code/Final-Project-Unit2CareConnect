package com.careconnect.careconnect.controller;


import com.careconnect.careconnect.model.TrustedContact;
import com.careconnect.careconnect.repository.TrustedContactRepository;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public TrustedContact createContact(
            @RequestBody TrustedContact contact){
        return repository.save(contact);
    }

    @PutMapping("/{id}")
    public TrustedContact updateContact(
            @PathVariable Long id,
            @RequestBody TrustedContact contact){
      contact.setId(id);
      return repository.save(contact);
    }

    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id){
        repository.deleteById(id);
    }


}

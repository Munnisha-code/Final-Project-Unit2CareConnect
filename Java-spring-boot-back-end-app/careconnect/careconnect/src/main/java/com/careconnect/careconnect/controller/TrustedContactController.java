package com.careconnect.careconnect.controller;


import com.careconnect.careconnect.model.TrustedContact;
import com.careconnect.careconnect.model.User;
import com.careconnect.careconnect.repository.TrustedContactRepository;
import com.careconnect.careconnect.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/trusted-contacts")
@CrossOrigin (origins = "*")

public class TrustedContactController {

    private final TrustedContactRepository repository;
    private final UserRepository userRepository;

    public TrustedContactController(TrustedContactRepository repository, UserRepository userRepository){
      this.repository = repository;
      this.userRepository = userRepository;
    }


    @GetMapping("/user/{userId}")
    public List<TrustedContact> getContactsByUserId(
            @PathVariable Long userId){
        return repository.findByUser_Id(userId);
    }

    @PostMapping ("/user/{userId}")
    @ResponseStatus(HttpStatus.CREATED)

    public TrustedContact createContact(
            @PathVariable Long userId,
            @RequestBody TrustedContact contact){
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        contact.setUser(user);

        return repository.save(contact);
    }

    @PutMapping("/user/{userId}/{id}")
    public TrustedContact updateContact(
            @PathVariable Long userId,
            @PathVariable Long id,
            @RequestBody TrustedContact contact){
        TrustedContact existingContact = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("contact not found"));
        if(!existingContact.getUser().getId().equals(userId)){
            throw new RuntimeException("You cannot update another user's contact");
        }
        existingContact.setName(contact.getName());
        existingContact.setMobileNumber(contact.getMobileNumber());
        existingContact.setRelationship(contact.getRelationship());

      return repository.save(existingContact);
    }

    @DeleteMapping("/user/{userId}/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteContact(@PathVariable Long userId,
                              @PathVariable Long id){
        TrustedContact existingContact = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        if (!existingContact.getUser().getId().equals(userId)) {
            throw new RuntimeException("You cannot delete another user's contact");
        }
        repository.deleteById(id);
    }


}

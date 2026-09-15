package com.careconnect.careconnect.controller;

import com.careconnect.careconnect.model.Message;
import com.careconnect.careconnect.dto.MessageRequest;
import com.careconnect.careconnect.repository.MessageRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;


@RestController
@RequestMapping("/api/messages")
@CrossOrigin
public class MessageController {

    private final MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @PostMapping
    public ResponseEntity<Message> saveMessage(@RequestBody MessageRequest request){

        Message message = new Message();

        message.setTrustedContactId(request.getTrustedContactId());
        message.setMessageText(request.getMessageText());
        message.setStatus("SAVED");
        message.setCreatedAt(LocalDateTime.now());

        Message saveMessage = messageRepository.save(message);

        return ResponseEntity.ok(saveMessage);
    }

    @GetMapping
     public ResponseEntity<?> getAllMessages(){
        return ResponseEntity.ok(messageRepository.findAll());
    }
    @GetMapping("/trustedContact/{trustedContactId}")
     public ResponseEntity<?> getMessageByTrustedContact(@PathVariable Long trustedContactId){
        return ResponseEntity.ok(messageRepository
                .findByTrustedContactIdOrderByCreatedAtAsc(trustedContactId));
    }
}

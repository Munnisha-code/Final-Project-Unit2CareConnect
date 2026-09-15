package com.careconnect.careconnect.repository;

import com.careconnect.careconnect.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByTrustedContactIdOrderByCreatedAtAsc(Long trustedContactId);
}

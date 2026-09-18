package com.careconnect.careconnect.repository;

import com.careconnect.careconnect.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;


public interface LocationRepository extends JpaRepository<Location, Long> {
}

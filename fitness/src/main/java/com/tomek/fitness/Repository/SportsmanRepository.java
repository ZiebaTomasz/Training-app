package com.tomek.fitness.Repository;

import com.tomek.fitness.domain.Sportsman;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SportsmanRepository extends JpaRepository<Sportsman, Long> {

}

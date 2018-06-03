package com.tomek.fitness.Repository;

import com.tomek.fitness.domain.Training;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainingRepository extends JpaRepository<Training, Long> {

}

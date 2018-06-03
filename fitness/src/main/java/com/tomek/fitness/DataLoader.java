package com.tomek.fitness;

import com.tomek.fitness.Repository.SportsmanRepository;
import com.tomek.fitness.Repository.TrainingRepository;
import com.tomek.fitness.domain.Exercise;
import com.tomek.fitness.domain.Sportsman;
import com.tomek.fitness.domain.Training;
import com.tomek.fitness.domain.TrainingTimer;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DataLoader {

  @Autowired
  private SportsmanRepository sportsmanRepository;

  @Autowired
  private TrainingRepository trainingRepository;

  @PostConstruct
  private void initDatabase() {
    Sportsman sportsman = new Sportsman();
    sportsman.setId(1001L);
    sportsman.setFirstName("Tomek");
    sportsman.setLastName("Zięba");

    List<Training> trainings = new ArrayList<>();
    Training training1 = new Training();
    training1.setId(1L);
    training1.setDateOfTraining(LocalDate.now());
    trainings.add(training1);

    TrainingTimer trainingTimer = new TrainingTimer();
    trainingTimer.setStartTime(LocalTime.now().minusHours(1));
    trainingTimer.setEndTime(LocalTime.now().minusMinutes(15));
    training1.setTrainingTimer(trainingTimer);
    training1.setExercise(Exercise.deadlift);

    trainingRepository.save(training1);

    sportsman.setTrainings(trainings);
    sportsmanRepository.save(sportsman);
  }
}

package com.tomek.fitness.domain;

import java.time.LocalDate;
import java.util.Map;
import javax.persistence.Basic;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.Data;

@Data
@Entity
public class Training {

  @Id
  private Long id;

//  @Basic
  private LocalDate dateOfTraining;

  @Enumerated(value = EnumType.STRING)
  private Exercise exercise;

  @Embedded
  TrainingTimer trainingTimer;
}

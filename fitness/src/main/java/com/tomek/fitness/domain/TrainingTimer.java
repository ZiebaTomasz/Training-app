package com.tomek.fitness.domain;

import java.time.LocalTime;
import javax.persistence.Basic;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.Data;

@Data
@Embeddable
public class TrainingTimer {

//@Basic
private LocalTime startTime;

//@Basic
private LocalTime endTime;
}

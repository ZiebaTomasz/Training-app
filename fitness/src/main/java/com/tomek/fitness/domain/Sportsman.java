package com.tomek.fitness.domain;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import lombok.Data;

@Data
@Entity
public class Sportsman {

@Id
@SequenceGenerator(name = "Sportsman_sequence", initialValue = 1000)
private Long id;

@Column(name = "first_name")
private String firstName;

@Column(name = "last_name")
private String lastName;

@OneToMany(orphanRemoval = true)
private List<Training> trainings;

}

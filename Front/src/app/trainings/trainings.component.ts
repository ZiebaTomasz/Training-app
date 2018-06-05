import { Component, OnInit } from '@angular/core';
import {TrainingService} from "../training/training.service";
import {Training} from "../training/training.module";

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  private trainings: Training[];

  constructor(private traininServ : TrainingService) { }

  ngOnInit() {
    this.trainings = this.traininServ.getTrainings();

  }

}

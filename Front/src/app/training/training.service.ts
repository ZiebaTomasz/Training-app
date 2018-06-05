import {Training} from "./training.module";

export class TrainingService {
  private trains: Training[] = [
    { id: '1', exercise: Exercise.BenchPress, startDate: new Date(1993, 5, 7, 14)},
    { id: '2', exercise: Exercise.Squad, startDate: new Date(1993, 5, 7, 15)}
  ];

  getTrainings(){
    return this.trains.slice();
  }
}

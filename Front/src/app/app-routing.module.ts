import {RouterModule, Routes} from "@angular/router";
import {TrainingsComponent} from "./trainings/trainings.component";
import {NgModule} from "@angular/core";
import {NewTrainingComponent} from "./training/new-training/new-training.component";

const routes: Routes = [

  {path: 'tr', component: TrainingsComponent},
  {path: 'new', component: NewTrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}

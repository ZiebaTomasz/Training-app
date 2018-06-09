import {RouterModule, Routes} from "@angular/router";
import {TrainingsComponent} from "./trainings/trainings.component";
import {NgModule} from "@angular/core";
import {NewTrainingComponent} from "./training/new-training/new-training.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";

const routes: Routes = [

  {path: 'tr', component: TrainingsComponent},
  {path: 'new', component: NewTrainingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}

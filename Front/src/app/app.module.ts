import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { TrainingsComponent } from './trainings/trainings.component';
import {AppRoutingModule} from "./app-routing.module";
import {TrainingService} from "./training/training.service";
import {HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './navigation/header/header.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NewTrainingComponent,
    TrainingsComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

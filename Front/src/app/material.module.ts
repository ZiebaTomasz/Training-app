import {NgModule} from "@angular/core";
import {
  MatCheckboxModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule

} from "@angular/material";

@NgModule({
  imports: [
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule {

}

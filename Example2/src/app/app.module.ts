import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";

@NgModule({
  declarations: [AppComponent, AddEmployeeComponent, UpdateEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

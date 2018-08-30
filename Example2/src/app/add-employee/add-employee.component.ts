import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./IEmployee";
import { FormGroup, FormBuilder, Validator } from "@angular/forms";

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"]
})
export class AddEmployeeComponent implements OnInit {
  employees: IEmployee[] = [];
  temp: IEmployee;
  addForm: FormGroup;
  update: boolean = false;
  updateEmployee: IEmployee;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      id: "",
      name: "",
      salary: "",
      department: ""
    });
  }

  addEmployee() {
    let employee: IEmployee = {
      id: this.addForm.get("id").value,
      name: this.addForm.get("name").value,
      salary: this.addForm.get("salary").value,
      department: this.addForm.get("department").value
    };
    this.employees.push(employee);
  }

  deleteEmp(id) {
    let emp = this.employees.filter(c => c.id === id)[0];
    this.employees.splice(this.employees.indexOf(emp), 1);
  }

  updateEmp(id) {
    let emp = this.employees.filter(c => c.id === id)[0];
    this.temp = emp;
    this.updateEmployee = { ...emp };
    this.temp = emp;
    this.update = true;
  }

  updateData() {
    let index = this.employees.indexOf(this.temp);
    this.employees[index] = this.updateEmployee;
    console.log(index, this.employees[index], this.updateEmployee);
    this.update = false;
  }
}

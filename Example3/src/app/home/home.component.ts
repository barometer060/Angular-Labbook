import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  addProduct: FormGroup;
  availableOptions: String[] = ["Big Bazar", "DMart", "Reliance", "Mega Store"];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addProduct = this.fb.group({
      prodId: ["", Validators.required],
      prodName: ["", Validators.required],
      prodCost: ["", Validators.required],
      online: ["", Validators.required],
      prodCat: [""],
      available: [""]
    });
  }

  printData(e): void {
    e.preventDefault();
    if (this.addProduct.valid) {
      console.log("Submitted");
    } else {
      console.log("Required fields are missing");
    }
  }

  getChecked(e) {
    if (e.target.checked) {
      console.log(e.target.value);
    }
  }

  getSelected(e) {
    console.log(e.target.value);
  }
}

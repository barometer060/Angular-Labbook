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
  submittedAns = {};
  available: String[] = [];
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
      this.submittedAns = {
        prodId: this.addProduct.get("prodId").value,
        prodName: this.addProduct.get("prodName").value,
        prodCost: this.addProduct.get("prodCost").value,
        online: this.addProduct.get("online").value,
        prodCat: this.addProduct.get("prodCat").value,
        available: this.available
      };
      console.log(this.submittedAns);
      this.available = [];
      this.addProduct.reset();
    } else {
      console.log("Required fields are missing");
    }
  }

  getChecked(e) {
    if (e.target.type === "select-one") {
      console.log(e.target.value);
    } else {
      if (e.target.checked) {
        if (
          e.target.type === "checkbox" &&
          this.available.indexOf(e.target.value) === -1
        ) {
          this.available.push(e.target.value);
        }
      } else {
        let index = this.available.indexOf(e.target.value);
        this.available.splice(index,1);
      }
    }
  }
}

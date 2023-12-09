import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CUSTOMER_ADD_FORM} from "./addCustomer.form";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../shared/models/customer.model";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  form!: FormGroup;

  constructor(
    route: ActivatedRoute,
    private readonly $customerServ: CustomerService,
    builder: FormBuilder,
    private router:Router
  ) {
    this.form = builder.group(CUSTOMER_ADD_FORM);
  }

  onSubmit() {
    if(this.form.valid){
      const customer : Customer = {
        id:0,
        lastname:this.form.value.lastname,
        firstname:this.form.value.firstname,
        username:this.form.value.username,
        email:this.form.value.email,
        password:this.form.value.password,
        phoneNumber:this.form.value.phoneNumber,
        address:this.form.value.address+", "+this.form.value.zipCode+" "+this.form.value.city
      };
      this.$customerServ.add(customer).subscribe();
      this.router.navigateByUrl("")
    }
  }
}

import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../shared/models/customer.model";
import {CUSTOMER_UPDATE_FORM} from "./updateCustomer.form";
import {elementAt, Observable, tap} from "rxjs";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent {
  form!: FormGroup;
  customer$?: Observable<Customer>;
  private customerId: number;

  constructor(
    route: ActivatedRoute,
    private readonly $customerServ: CustomerService,
    builder: FormBuilder,
    private router: Router
  ) {
    this.form = builder.group(CUSTOMER_UPDATE_FORM);
    this.customerId = route.snapshot.params['id'];
    this.customer$ = $customerServ.getOne(this.customerId).pipe(
      tap(data =>
        this.form.patchValue({
          lastname: data.lastname,
          firstname: data.firstname,
          email: data.email,
          phoneNumber: data.phoneNumber,
          address: data.address.slice(0, data.address.indexOf(',')),
          zipCode: data.address.slice(data.address.indexOf(',') + 2, data.address.indexOf(',') + 6),
          city: data.address.slice(data.address.indexOf(',') + 7)
        })
      )
    );
  }

  onSubmit() {
    if (this.form.valid) {
      const customer: Customer = {
        id: this.customerId,
        lastname: this.form.value.lastname,
        firstname: this.form.value.firstname,
        email: this.form.value.email,
        phoneNumber: this.form.value.phoneNumber,
        address: this.form.value.address + ", " + this.form.value.zipCode + " " + this.form.value.city
      };
      this.$customerServ.update(customer).subscribe();
      this.router.navigateByUrl("")
    }
  }

}

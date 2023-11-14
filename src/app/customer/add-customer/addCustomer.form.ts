import {Validators} from "@angular/forms";

export const CUSTOMER_ADD_FORM = {
  'lastname': [null, [Validators.required]],
  'firstname': [null, [Validators.required]],
  'username': [null, [Validators.required]],
  'email': [null,[Validators.required,Validators.email]],
  'password': [null, [Validators.required]],
  'phoneNumber': [null, [Validators.required]],
  'address': [null, [Validators.required]],
  'zipCode': [null, [Validators.required]],
  'city': [null, [Validators.required]],
}

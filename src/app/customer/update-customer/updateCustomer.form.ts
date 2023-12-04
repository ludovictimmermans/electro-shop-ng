import {Validators} from "@angular/forms";

export const CUSTOMER_UPDATE_FORM = {
  'lastname': [null, [Validators.required]],
  'firstname': [null, [Validators.required]],
  'email': [null,[Validators.required,Validators.email]],
  'phoneNumber': [null, [Validators.required]],
  'address': [null, [Validators.required]],
  'zipCode': [null, [Validators.required]],
  'city': [null, [Validators.required]],
}

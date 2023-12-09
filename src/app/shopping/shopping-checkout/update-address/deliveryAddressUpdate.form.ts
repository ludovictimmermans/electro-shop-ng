import {Validators} from "@angular/forms";

export const ADDRESS_UPDATE_FORM = {
  'name': [null, [Validators.required]],
  'phoneNumber': [null, [Validators.required,Validators.pattern("[0-9]{4}/[0-9]{6}")]],
  'address': [null, [Validators.required]],
  'zipCode': [null, [Validators.required]],
  'city': [null, [Validators.required]],
}

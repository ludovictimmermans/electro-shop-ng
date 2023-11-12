import {Validators} from "@angular/forms";

export const LOGIN_FORM = {
  'username': [null, [Validators.required]],
  'password': [null, [Validators.required]],
}

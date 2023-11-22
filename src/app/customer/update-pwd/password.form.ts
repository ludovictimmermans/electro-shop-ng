import {Validators} from "@angular/forms";

export const PASSWORD_FORM = {
  'oldPwd': [null, [Validators.required]],
  'newPwd': [null, [Validators.required]],
  'confirmPwd': [null, [Validators.required]]
}

import {Validators} from "@angular/forms";

export const CATEGORY_ADD_FORM = {
  'name': [null, [Validators.required]],
  'description': [null, [Validators.required]]
}

import {Validators} from "@angular/forms";

export const CATEGORY_UPDATE_FORM = {
  'name': [null, [Validators.required]],
  'description': [null, [Validators.required]]
}

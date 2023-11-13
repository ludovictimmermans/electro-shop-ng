import {Validators} from "@angular/forms";

export const BRAND_UPDATE_FORM = {
  'name': [null, [Validators.required]],
  'img': [null, [Validators.required]]
}

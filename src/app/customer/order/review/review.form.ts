import {Validators} from "@angular/forms";

export const REVIEW_FORM = {
  'rating': [null, [Validators.required]],
  'comment': [null, [Validators.required]],
}

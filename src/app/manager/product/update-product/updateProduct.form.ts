import {Validators} from "@angular/forms";

export const PRODUCT_UPDATE_FORM = {
  'name': [null, [Validators.required]],
  'description': [null, [Validators.required]],
  'price': [null, [Validators.required,Validators.min(0)]],
  'quantity': [null, [Validators.required,Validators.min(0)]],
  'categoryId': [null, [Validators.required]],
  'brandId': [null, [Validators.required]]
}

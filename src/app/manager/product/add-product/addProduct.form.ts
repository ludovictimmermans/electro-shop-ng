import {Validators} from "@angular/forms";

export const PRODUCT_ADD_FORM = {
  'name': [null, [Validators.required]],
  'description': [null, [Validators.required]],
  'price': [null, [Validators.required,Validators.min(0)]],
  'stock': [null, [Validators.required,Validators.min(0)]],
  'categoryId': [null, [Validators.required]],
  'brandId': [null, [Validators.required]],
  'url1':[null, [Validators.required]],
  'url2':[null, [Validators.required]],
  'url3':[null, [Validators.required]],
  'url4':[null, [Validators.required]]
}

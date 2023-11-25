import {Component, Input} from '@angular/core';
import {Product} from "../../../shared/models/product.model";
import {Observable} from "rxjs";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {REVIEW_FORM} from "./review.form";
import {Customer} from "../../../shared/models/customer.model";
import {Review} from "../../../shared/models/review.model";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  product$:Observable<Product>;
  productId:number;
  form: FormGroup;


  constructor(private readonly $productServ:ProductService,builder: FormBuilder,private route:ActivatedRoute) {
    this.productId=route.snapshot.params['id'];
    this.product$ = $productServ.getOne(this.productId);
    this.form=builder.group(REVIEW_FORM);
  }

  onSubmit() {
    if (this.form.valid) {
      const review: Review = {
        rating: this.form.value.rating,
        comment: this.form.value.comment,
        productId : this.productId
      };
      this.$productServ.review(review).subscribe();
    }
  }
}

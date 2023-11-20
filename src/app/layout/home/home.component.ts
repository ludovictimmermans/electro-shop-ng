import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../shared/models/product.model";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}

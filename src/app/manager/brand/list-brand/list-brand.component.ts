import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Brand} from "../../../shared/models/brand.model";
import {BrandService} from "../../../services/brand.service";


@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss']
})
export class ListBrandComponent {
  brands$: Observable<Brand[]>;


  constructor(private readonly $brandServ: BrandService) {
    this.brands$ = this.$brandServ.getAll();
  }

  delete(id:number) {
    // attention au timing, etre sur de l'ordre d'execution
    this.$brandServ.delete(id).subscribe(() => this.loadBrand());

  }

  loadBrand(){
    this.brands$ = this.$brandServ.getAll();
  }

}

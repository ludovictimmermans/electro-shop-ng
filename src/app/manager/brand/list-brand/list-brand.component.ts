import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Brand} from "../../../shared/models/brand.model";
import {BrandService} from "../../../services/brand.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AddBrandComponent} from "../add-brand/add-brand.component";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss'],
  providers: [DialogService,MessageService]
})
export class ListBrandComponent {
  brands$: Observable<Brand[]>;
  ref?: DynamicDialogRef;


  constructor(private readonly $brandServ: BrandService,public dialogService: DialogService,public messageService: MessageService) {
    this.brands$ = this.$brandServ.getAll();
  }

  delete(id:number) {
    // attention au timing, etre sur de l'ordre d'execution
    this.$brandServ.delete(id).subscribe(() => this.loadBrand());

  }

  loadBrand(){
    this.brands$ = this.$brandServ.getAll();
  }

  show(){
    this.ref = this.dialogService.open(AddBrandComponent, {
        header: 'Ajouter une marque',
        width: '50%',
        baseZIndex: 10000
    });
    this.ref.onClose.subscribe((brand:Brand) => {
      console.log("test")
      if (brand) {
        this.messageService.add({ severity: 'success', summary: 'Marque ajouté', detail: brand.name });
      }
    });
  }

}

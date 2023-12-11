import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../shared/models/product.model";
import {ProductService} from "../../../services/product.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, ConfirmEventType, MessageService} from "primeng/api";
import {AddProductComponent} from "../add-product/add-product.component";
import {UpdateProductComponent} from "../update-product/update-product.component";
import {Table} from "primeng/table";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ListProductComponent {
  products$: Observable<Product[]>;
  ref: DynamicDialogRef | undefined;
  search: string="";


  constructor(private readonly $productServ: ProductService,
              public dialogService: DialogService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
    this.products$ = this.$productServ.getAll();
  }

  delete(product: Product) {
    this.confirmationService.confirm({
      message: "Etes-vous sûr d'effacer ce produit?",
      icon: 'pi pi-exclamation-triangle text-red-500',
      accept: () => {
        this.$productServ.delete(product.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'info',
              summary: 'Confirmation',
              detail: 'Vous avez supprimer ' + product.name
            });
            this.loadProduct();
          }
        });
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.confirmationService.close()
            break;
          case ConfirmEventType.CANCEL:
            this.confirmationService.close()
            break;
        }
      }
    });
  }

  loadProduct() {
    this.products$ = this.$productServ.getAll();
  }

  showAdd() {
    this.ref = this.dialogService.open(AddProductComponent, {
      header: 'Ajouter un produit',
      width: '60%',
      height: '100%',
      baseZIndex: 10000,

    });
    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
        this.messageService.add({severity: 'success', summary: 'Produit ajouté', detail: product.name});
        this.loadProduct();
      }
    });
  }

  showUpdate(product:Product) {
    this.ref = this.dialogService.open(UpdateProductComponent, {
      header: 'Modifier un produit',
      width: '60%',
      height: '100%',
      baseZIndex: 10000,
      data:{
        id: product.id
      }
    });
    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
        this.messageService.add({severity: 'success', summary: 'Produit modifié', detail: product.name});
        this.loadProduct();
      }
    });
  }

  clear(table: Table) {
    table.clear()
  }

}

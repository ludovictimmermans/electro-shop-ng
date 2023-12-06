import {Component} from "@angular/core";
import {ConfirmationService, ConfirmEventType, MessageService} from "primeng/api";
import {Category} from "../../../shared/models/category.model";
import {Observable} from "rxjs";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {CategoryService} from "../../../services/category.service";
import {AddCategoryComponent} from "../add-category/add-category.component";
import {UpdateCategoryComponent} from "../update-category/update-category.component";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class ListCategoryComponent{
  categories$: Observable<Category[]>;
  ref: DynamicDialogRef | undefined;

  constructor(private readonly $categoryServ: CategoryService,
              public dialogService: DialogService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
    this.categories$ = this.$categoryServ.getAll();
  }

  delete(category:Category) {
    this.confirmationService.confirm({
      message: "Etes-vous sûr d'effacer cette catégorie?",
      icon: 'pi pi-exclamation-triangle text-red-500',
      accept: () => {
        // attention au timing, etre sur de l'ordre d'execution
        this.$categoryServ.delete(category.id).subscribe({
            next:() => {
              this.messageService.add({ severity: 'info', summary: 'Confirmation', detail: 'Vous avez supprimer '+category.name });
              this.loadCategory();
            }
          }
        )},
      reject: (type:ConfirmEventType) => {
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

  loadCategory(){
    this.categories$ = this.$categoryServ.getAll();
  }

  showAdd() {
    this.ref = this.dialogService.open(AddCategoryComponent, {
      header: 'Ajouter une catégorie',
      width: '50%',
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((category:Category) => {
      if (category) {
        this.messageService.add({ severity: 'success', summary: 'Catégorie ajouté', detail: category.name });
        this.loadCategory();
      }
    });
  }

  showUpdate(category: Category) {
    this.ref = this.dialogService.open(UpdateCategoryComponent, {
      header: 'Modifier une catégorie',
      width: '50%',
      baseZIndex: 10000,
      data:{
        id: category.id
      }
    });
    this.ref.onClose.subscribe((category:Category) => {
      if (category) {
        this.messageService.add({ severity: 'success', summary: 'Catégorie modifié', detail: category.name });
        this.loadCategory();
      }
    });
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}

import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../shared/models/cart.model";
import {AuthService} from "../../services/auth.service";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../shared/models/customer.model";
import {Observable} from "rxjs";
import {DeliveryAddress} from "../../shared/models/DeliveryAddress.model";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {UpdateAddressComponent} from "./update-address/update-address.component";
import {AddAddressComponent} from "./add-address/add-address.component";
import {AddressService} from "../../services/address.service";

@Component({
  selector: 'app-shopping-checkout',
  templateUrl: './shopping-checkout.component.html',
  styleUrls: ['./shopping-checkout.component.scss']
})
export class ShoppingCheckoutComponent {
  cart: CartItem[];
  selectedAddress:DeliveryAddress | null=null;
  selectedCard:string="";
  user!:Observable<Customer>;
  username!:string|null;
  ref:DynamicDialogRef | undefined;

  constructor(private readonly $cartServ:CartService,
              private readonly $authService:AuthService,
              private readonly $customerServ:CustomerService,
              private readonly $addressService:AddressService,
              public dialogService:DialogService,
              private messageService : MessageService
              ) {
    this.cart = $cartServ.cart;
    if(this.$authService.isConnected){
      this.$authService.username$.subscribe( u=> this.username=u);
      if (this.username != null) {
        this.user = this.$customerServ.getOneByUsername();
      }
    }


  }

  loadCustomer(){
      this.user = this.$customerServ.getOneByUsername();
  }

  get total() {
    return this.$cartServ.total;
  }

  get TVA(){
    return (this.total/100)*21
  }

  changeAddress(address:DeliveryAddress) {
    if(address==this.selectedAddress){
      this.selectedAddress=null;
    }else{
      this.selectedAddress = address;
    }
  }

  showAdd(){
    this.ref = this.dialogService.open(AddAddressComponent, {
      header: 'Ajouter une adresse de livraison',
      width: '50%',
      baseZIndex: 10000
    });
    this.ref.onClose.subscribe((address: DeliveryAddress) => {
      if (address) {
        this.messageService.add({ severity: 'success', summary: 'Adresse ajouté', detail: address.name });
      }
    });
  }

  showUpdate(address: DeliveryAddress) {
    this.ref = this.dialogService.open(UpdateAddressComponent, {
      header: 'Modifier une adresse de livraison',
      width: '50%',
      baseZIndex: 10000,
      data:{
        id: address.id
      }
    });
    this.ref.onClose.subscribe((address:DeliveryAddress) => {
      if (address) {
        this.messageService.add({ severity: 'success', summary: 'Adresse modifié', detail: address.name });
        this.loadCustomer()
      }
    });

  }
  makeOrder() {
    if(this.selectedAddress!=null)
      this.$cartServ.orderCart(this.selectedAddress).subscribe();
  }
}

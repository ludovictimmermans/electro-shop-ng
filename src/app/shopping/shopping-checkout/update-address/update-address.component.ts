import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {AddressService} from "../../../services/address.service";
import {DeliveryAddress} from "../../../shared/models/DeliveryAddress.model";
import {ADDRESS_UPDATE_FORM} from "./deliveryAddressUpdate.form";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent {
  form: FormGroup;
  address$: Observable<DeliveryAddress>;
  private addressId:number;


  constructor(private builder: FormBuilder,
              public ref: DynamicDialogRef,
              private messageService: MessageService,
              public config: DynamicDialogConfig,
              private $addressServ: AddressService) {
    this.form = builder.group(ADDRESS_UPDATE_FORM);
    this.addressId = this.config.data.id;
    this.address$ = $addressServ.getOne(this.addressId).pipe(
      tap(data=> {
        this.form.patchValue({
          name:data.name,
          phoneNumber:data.contact,
          address: data.address.slice(0, data.address.indexOf(',')),
          zipCode: data.address.slice(data.address.indexOf(',') + 2, data.address.indexOf(',') + 6),
          city: data.address.slice(data.address.indexOf(',') + 7)
        })
      })
    )
  }
  onSubmit() {
    if (this.form.valid) {
      const address: DeliveryAddress = {
        id: this.addressId,
        name: this.form.value.name,
        contact: this.form.value.phoneNumber,
        address: this.form.value.address + ", " + this.form.value.zipCode + " " + this.form.value.city
      };
      this.$addressServ.update(address).subscribe({
        next: () => this.ref.close(address),
        error:()=>{
          console.log('erreur');
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Une erreur s'est produite"});

        }
      });
    }
  }
}

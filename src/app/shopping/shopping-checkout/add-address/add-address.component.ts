import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ADDRESS_ADD_FORM} from "./deliveryAddress.form";
import {DeliveryAddress} from "../../../shared/models/DeliveryAddress.model";
import {AddressService} from "../../../services/address.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent {
  form: FormGroup;


  constructor(private builder: FormBuilder,
              public ref: DynamicDialogRef,
              private messageService: MessageService,
              private $addressServ: AddressService) {
    this.form = builder.group(ADDRESS_ADD_FORM);
  }

  onSubmit() {
    if (this.form.valid) {
      const address: DeliveryAddress = {
        id: 0,
        name: this.form.value.name,
        contact: this.form.value.phoneNumber,
        address: this.form.value.address + ", " + this.form.value.zipCode + " " + this.form.value.city
      };
      this.$addressServ.add(address).subscribe({
        next: () => this.ref.close(address),
        error:()=>{
          console.log('erreur');
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Ce nom de marque existe déja"});
          this.form.reset();
        }
      });
    }
  }
}

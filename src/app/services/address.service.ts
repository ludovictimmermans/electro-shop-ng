import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeliveryAddress} from "../shared/models/DeliveryAddress.model";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private readonly BASE_URL = 'http://localhost:8080/address'
  constructor(private client: HttpClient) { }

  getAll():Observable<DeliveryAddress[]>{
    return this.client.get<DeliveryAddress[]>(this.BASE_URL);
  }

  getOne(addressId: number) {
     return this.client.get<DeliveryAddress>(this.BASE_URL+'/'+addressId);

  }

  add(address: DeliveryAddress) {
    return this.client.post<DeliveryAddress>(this.BASE_URL,address);
  }

  update(address:DeliveryAddress){
    return this.client.put<DeliveryAddress>(this.BASE_URL+'/'+address.id,address);
  }

  delete(id: number) {
    return this.client.delete<DeliveryAddress>(this.BASE_URL+'/'+id);
  }
}

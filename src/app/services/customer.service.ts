import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../shared/models/customer.model";
import {PwdForm} from "../shared/models/pwdForm.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly BASE_URL = 'http://localhost:8080/customer'

  constructor(private client: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.client.get<Customer[]>(this.BASE_URL);
  }

  getOne(customerId: number) {
    return this.client.get<Customer>(this.BASE_URL + '/' + customerId);
  }

  getOneByUsername(){
    return this.client.get<Customer>(this.BASE_URL+'/connected');
  }

  add(customer: Customer) {
    return this.client.post<Customer>(this.BASE_URL, customer);
  }

  update(customer: Customer) {
    return this.client.put<Customer>(this.BASE_URL + '/' + customer.id, customer);
  }

  setPassword(username:string,pwd : PwdForm){
    return this.client.patch('http://localhost:8080/auth/password/'+ username,pwd);
  }

}

import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {Customer} from "../../shared/models/customer.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {PASSWORD_FORM} from "./password.form";
import {PwdForm} from "../../shared/models/pwdForm.model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-update-pwd',
  templateUrl: './update-pwd.component.html',
  styleUrls: ['./update-pwd.component.scss']
})
export class UpdatePwdComponent {
  form!: FormGroup;
  customer$?: Observable<Customer>;
  username:string | undefined;

  constructor(
    route: ActivatedRoute,
    private readonly $customerServ: CustomerService,
    private readonly $authServ: AuthService,
    builder: FormBuilder,
    private router: Router
  ) {
    this.form = builder.group(PASSWORD_FORM);
    if(this.$authServ.connectedUser)
      this.username = this.$authServ.connectedUser?.username;
  }

  onSubmit() {
    if (this.form.valid &&
        this.form.value.confirmPwd===this.form.value.newPwd
    ) {
      const pwd: PwdForm = {
        oldPwd: this.form.value.oldPwd,
        newPwd: this.form.value.newPwd

      };
      this.username=this.$authServ.connectedUser?.username;
      if (this.username != null) {
        this.$customerServ.setPassword(this.username, pwd).subscribe();
      }
      this.router.navigateByUrl("")
    }
  }


}

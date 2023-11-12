import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LOGIN_FORM} from "./login.form";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form : FormGroup;
  invalidCreds: boolean = false;

  constructor(
    builder: FormBuilder,
    private router: Router,
    private readonly $authServ: AuthService,
  ) {
    this.form = builder.group( LOGIN_FORM )
  }

  onSubmit() {
    if( this.form.valid ){
      this.$authServ.connect( this.form.value.username, this.form.value.password ).subscribe({
        next: () => this.router.navigateByUrl('/home'),
        error: () => {
          this.invalidCreds = true;
          this.form.reset();
        }
      })
    }
  }

}

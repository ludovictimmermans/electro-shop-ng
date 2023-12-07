import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LOGIN_FORM} from "./login.form";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MessageService]
})
export class LoginComponent {
  form : FormGroup;
  invalidCreds: boolean = false;

  constructor(
    builder: FormBuilder,
    private router: Router,
    private readonly $authServ: AuthService,
    private messageService: MessageService
  ) {
    this.form = builder.group( LOGIN_FORM )
  }

  onSubmit() {
    if( this.form.valid ){
      this.$authServ.connect( this.form.value.username, this.form.value.password ).subscribe({
        next: () => {
          this.messageService.add({ severity: 'succes', summary: 'Connexion', detail: "Bonjour "+this.form.value.username});
          if(this.$authServ.connectedUser?.roles[0]=="ADMIN"){
            this.router.navigateByUrl("manager/statistic");
          }else{this.router.navigateByUrl('/home');}

        },
        error: () => {
          this.invalidCreds = true;
          this.messageService.add({ severity: 'error', summary: 'Problème', detail: "Le nom d'utilisateur ou le mot de passe est incorrect "});
          this.form.reset();
        }
      })
    }
  }

}

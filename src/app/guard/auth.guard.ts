import {CanActivateChildFn, CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const AuthGuard: CanActivateFn = (route, state) => {
  const $authService = inject(AuthService);
  const router:Router=inject(Router);
  console.log($authService.role);
  if(route.data['role'] === $authService.role)
    return true;
  else{
    //router.navigateByUrl("");
    return false;

  }
};

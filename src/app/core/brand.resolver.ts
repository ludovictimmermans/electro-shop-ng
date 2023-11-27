import { ResolveFn } from '@angular/router';
import {Brand} from "../shared/models/brand.model";
import {BrandService} from "../services/brand.service";
import {inject} from "@angular/core";
import {tap} from "rxjs";

export const BrandResolver: ResolveFn<Brand[]> = (route, state) => {
  const $brandServ = inject(BrandService);
  return $brandServ.getAll().pipe(tap(
    {
      error: () => {
        console.log("error")
      }
    }
  ));
};

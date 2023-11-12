import { ResolveFn } from '@angular/router';
import {Category} from "../shared/models/category.model";
import {CategoryService} from "../services/category.service";
import {inject} from "@angular/core";
import {tap} from "rxjs";

export const CategoryResolver: ResolveFn<Category[]> = (route, state) => {
  const $categoryServ = inject(CategoryService);
  return $categoryServ.getAll().pipe(tap(
    {
      error: () => {
        console.log("error")
      }
    }
  ));
};

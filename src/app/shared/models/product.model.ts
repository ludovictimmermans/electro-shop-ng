import {Brand} from "./brand.model";
import {Category} from "./category.model";

export interface Product{
  id:number,
  name:string,
  description:string,
  price:number,
  stock:number,
  brandId: number,
  categoryId:number
}



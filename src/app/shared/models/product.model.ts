import {Brand} from "./brand.model";
import {Category} from "./category.model";
import {Picture} from "./picture.model";

export interface Product{
  id:number,
  name:string,
  description:string,
  price:number,
  stock:number,
  brandId: number,
  categoryId:number,
  pictures:Picture[]
}



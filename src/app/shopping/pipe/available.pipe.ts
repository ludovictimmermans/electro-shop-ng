import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available',
  pure: false
})
export class AvailablePipe implements PipeTransform {

  transform(stock:number): string  {

    return (stock > 10) ? "En stock" : (stock >0) ? 'Stock bas' : 'En ruputre de stock';
  }

}

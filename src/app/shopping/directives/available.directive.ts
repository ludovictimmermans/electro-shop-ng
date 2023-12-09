import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appAvailable]'
})
export class AvailableDirective implements OnInit, OnChanges{

  @Input() stock!: number;

  constructor(private _ref: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeColor();
  }

  ngOnInit(): void {
    this.changeColor();
  }

  changeColor(){
    const placeLeft = this.stock;
    if( placeLeft > 10 )
      this._ref.nativeElement.style.color = '#00a419'
    else if ( placeLeft > 0)
      this._ref.nativeElement.style.color = '#ea7900'
    else
      this._ref.nativeElement.style.color = '#e30000'
  }


}

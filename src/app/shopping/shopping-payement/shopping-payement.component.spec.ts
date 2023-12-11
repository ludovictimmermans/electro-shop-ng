import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingPayementComponent } from './shopping-payement.component';

describe('ShoppingPayementComponent', () => {
  let component: ShoppingPayementComponent;
  let fixture: ComponentFixture<ShoppingPayementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingPayementComponent]
    });
    fixture = TestBed.createComponent(ShoppingPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

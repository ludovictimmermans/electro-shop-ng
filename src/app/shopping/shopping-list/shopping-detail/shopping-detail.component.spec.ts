import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDetailComponent } from './shopping-detail.component';

describe('ShoppingDetailComponent', () => {
  let component: ShoppingDetailComponent;
  let fixture: ComponentFixture<ShoppingDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingDetailComponent]
    });
    fixture = TestBed.createComponent(ShoppingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

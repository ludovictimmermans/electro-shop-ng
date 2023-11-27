import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCategoryListComponent } from './shopping-category-list.component';

describe('ShoppingCategoryListComponent', () => {
  let component: ShoppingCategoryListComponent;
  let fixture: ComponentFixture<ShoppingCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCategoryListComponent]
    });
    fixture = TestBed.createComponent(ShoppingCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

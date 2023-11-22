import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePwdComponent } from './update-pwd.component';

describe('UpdatePwdComponent', () => {
  let component: UpdatePwdComponent;
  let fixture: ComponentFixture<UpdatePwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePwdComponent]
    });
    fixture = TestBed.createComponent(UpdatePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

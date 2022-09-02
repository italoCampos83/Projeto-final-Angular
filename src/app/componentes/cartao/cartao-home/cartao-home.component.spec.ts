import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoHomeComponent } from './cartao-home.component';

describe('CartaoHomeComponent', () => {
  let component: CartaoHomeComponent;
  let fixture: ComponentFixture<CartaoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDisturbComponent } from './order-disturb.component';

describe('OrderDisturbComponent', () => {
  let component: OrderDisturbComponent;
  let fixture: ComponentFixture<OrderDisturbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDisturbComponent]
    });
    fixture = TestBed.createComponent(OrderDisturbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

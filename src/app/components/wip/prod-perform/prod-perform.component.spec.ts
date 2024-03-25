import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPerformComponent } from './prod-perform.component';

describe('ProdPerformComponent', () => {
  let component: ProdPerformComponent;
  let fixture: ComponentFixture<ProdPerformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdPerformComponent]
    });
    fixture = TestBed.createComponent(ProdPerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

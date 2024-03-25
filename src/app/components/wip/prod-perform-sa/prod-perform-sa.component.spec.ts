import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPerformSaComponent } from './prod-perform-sa.component';

describe('ProdPerformSaComponent', () => {
  let component: ProdPerformSaComponent;
  let fixture: ComponentFixture<ProdPerformSaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdPerformSaComponent]
    });
    fixture = TestBed.createComponent(ProdPerformSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

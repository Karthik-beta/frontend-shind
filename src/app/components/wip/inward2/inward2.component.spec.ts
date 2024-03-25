import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inward2Component } from './inward2.component';

describe('Inward2Component', () => {
  let component: Inward2Component;
  let fixture: ComponentFixture<Inward2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Inward2Component]
    });
    fixture = TestBed.createComponent(Inward2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

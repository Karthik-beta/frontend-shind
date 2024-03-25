import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrComponent } from './ecr.component';

describe('EcrComponent', () => {
  let component: EcrComponent;
  let fixture: ComponentFixture<EcrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcrComponent]
    });
    fixture = TestBed.createComponent(EcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

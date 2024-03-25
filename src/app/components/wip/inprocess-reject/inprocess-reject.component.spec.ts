import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprocessRejectComponent } from './inprocess-reject.component';

describe('InprocessRejectComponent', () => {
  let component: InprocessRejectComponent;
  let fixture: ComponentFixture<InprocessRejectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InprocessRejectComponent]
    });
    fixture = TestBed.createComponent(InprocessRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

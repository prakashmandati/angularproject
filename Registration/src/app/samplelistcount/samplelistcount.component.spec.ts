import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplelistcountComponent } from './samplelistcount.component';

describe('SamplelistcountComponent', () => {
  let component: SamplelistcountComponent;
  let fixture: ComponentFixture<SamplelistcountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamplelistcountComponent]
    });
    fixture = TestBed.createComponent(SamplelistcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

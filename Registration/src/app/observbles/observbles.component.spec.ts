import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservblesComponent } from './observbles.component';

describe('ObservblesComponent', () => {
  let component: ObservblesComponent;
  let fixture: ComponentFixture<ObservblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservblesComponent]
    });
    fixture = TestBed.createComponent(ObservblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

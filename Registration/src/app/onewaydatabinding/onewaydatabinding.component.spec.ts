import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaydatabindingComponent } from './onewaydatabinding.component';

describe('OnewaydatabindingComponent', () => {
  let component: OnewaydatabindingComponent;
  let fixture: ComponentFixture<OnewaydatabindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnewaydatabindingComponent]
    });
    fixture = TestBed.createComponent(OnewaydatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

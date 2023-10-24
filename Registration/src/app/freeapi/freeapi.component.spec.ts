import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeapiComponent } from './freeapi.component';

describe('FreeapiComponent', () => {
  let component: FreeapiComponent;
  let fixture: ComponentFixture<FreeapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeapiComponent]
    });
    fixture = TestBed.createComponent(FreeapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

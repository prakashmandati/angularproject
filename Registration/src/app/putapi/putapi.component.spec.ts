import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutapiComponent } from './putapi.component';

describe('PutapiComponent', () => {
  let component: PutapiComponent;
  let fixture: ComponentFixture<PutapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutapiComponent]
    });
    fixture = TestBed.createComponent(PutapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

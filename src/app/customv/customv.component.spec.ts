import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomvComponent } from './customv.component';

describe('CustomvComponent', () => {
  let component: CustomvComponent;
  let fixture: ComponentFixture<CustomvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomvComponent]
    });
    fixture = TestBed.createComponent(CustomvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShequdetaililComponent } from './shequdetailil.component';

describe('ShequdetaililComponent', () => {
  let component: ShequdetaililComponent;
  let fixture: ComponentFixture<ShequdetaililComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShequdetaililComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShequdetaililComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

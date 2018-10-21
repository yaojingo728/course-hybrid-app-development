import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouyetongbuComponent } from './shouyetongbu.component';

describe('ShouyetongbuComponent', () => {
  let component: ShouyetongbuComponent;
  let fixture: ComponentFixture<ShouyetongbuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouyetongbuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouyetongbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

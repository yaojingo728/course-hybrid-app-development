import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongzhizanComponent } from './tongzhizan.component';

describe('TongzhizanComponent', () => {
  let component: TongzhizanComponent;
  let fixture: ComponentFixture<TongzhizanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongzhizanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongzhizanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

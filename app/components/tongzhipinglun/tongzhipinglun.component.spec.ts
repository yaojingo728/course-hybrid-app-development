import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongzhipinglunComponent } from './tongzhipinglun.component';

describe('TongzhipinglunComponent', () => {
  let component: TongzhipinglunComponent;
  let fixture: ComponentFixture<TongzhipinglunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongzhipinglunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongzhipinglunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

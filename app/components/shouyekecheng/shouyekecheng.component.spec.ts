import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouyekechengComponent } from './shouyekecheng.component';

describe('ShouyekechengComponent', () => {
  let component: ShouyekechengComponent;
  let fixture: ComponentFixture<ShouyekechengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouyekechengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouyekechengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

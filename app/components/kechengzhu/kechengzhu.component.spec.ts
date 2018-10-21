import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KechengzhuComponent } from './kechengzhu.component';

describe('KechengzhuComponent', () => {
  let component: KechengzhuComponent;
  let fixture: ComponentFixture<KechengzhuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KechengzhuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KechengzhuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KechengkanComponent } from './kechengkan.component';

describe('KechengkanComponent', () => {
  let component: KechengkanComponent;
  let fixture: ComponentFixture<KechengkanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KechengkanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KechengkanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodalainfoComponent } from './todalainfo.component';

describe('TodalainfoComponent', () => {
  let component: TodalainfoComponent;
  let fixture: ComponentFixture<TodalainfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodalainfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodalainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkeoComponent } from './linkeo.component';

describe('LinkeoComponent', () => {
  let component: LinkeoComponent;
  let fixture: ComponentFixture<LinkeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

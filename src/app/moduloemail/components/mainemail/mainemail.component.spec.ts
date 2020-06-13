import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainemailComponent } from './mainemail.component';

describe('MainemailComponent', () => {
  let component: MainemailComponent;
  let fixture: ComponentFixture<MainemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

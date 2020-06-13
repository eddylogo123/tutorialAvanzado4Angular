import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardaremailComponent } from './guardaremail.component';

describe('GuardaremailComponent', () => {
  let component: GuardaremailComponent;
  let fixture: ComponentFixture<GuardaremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardaremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardaremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

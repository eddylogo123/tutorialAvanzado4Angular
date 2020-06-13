import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraremailComponent } from './mostraremail.component';

describe('MostraremailComponent', () => {
  let component: MostraremailComponent;
  let fixture: ComponentFixture<MostraremailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraremailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

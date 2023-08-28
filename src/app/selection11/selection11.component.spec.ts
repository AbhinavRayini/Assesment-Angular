import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selection11Component } from './selection11.component';

describe('Selection11Component', () => {
  let component: Selection11Component;
  let fixture: ComponentFixture<Selection11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Selection11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selection11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

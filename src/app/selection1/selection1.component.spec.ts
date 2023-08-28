import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selection1Component } from './selection1.component';

describe('Selection1Component', () => {
  let component: Selection1Component;
  let fixture: ComponentFixture<Selection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Selection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

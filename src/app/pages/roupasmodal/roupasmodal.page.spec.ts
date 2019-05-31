import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasmodalPage } from './roupasmodal.page';

describe('RoupasmodalPage', () => {
  let component: RoupasmodalPage;
  let fixture: ComponentFixture<RoupasmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoupasmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupasmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

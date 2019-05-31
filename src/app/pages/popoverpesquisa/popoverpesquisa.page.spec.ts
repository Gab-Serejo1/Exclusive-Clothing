import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverpesquisaPage } from './popoverpesquisa.page';

describe('PopoverpesquisaPage', () => {
  let component: PopoverpesquisaPage;
  let fixture: ComponentFixture<PopoverpesquisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverpesquisaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverpesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

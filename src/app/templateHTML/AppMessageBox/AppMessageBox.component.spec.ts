/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppMessageBoxComponent } from './AppMessageBox.component';

describe('AppMessageBoxComponent', () => {
  let component: AppMessageBoxComponent;
  let fixture: ComponentFixture<AppMessageBoxComponent>;

  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      declarations: [ AppMessageBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

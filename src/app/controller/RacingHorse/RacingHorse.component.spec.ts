/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RacingHorseComponent } from './RacingHorse.component';

describe('RacingHorseComponent', () => {
  let component: RacingHorseComponent;
  let fixture: ComponentFixture<RacingHorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacingHorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RestartComponent } from './restart.component';

describe('RestartComponent', () => {
  let component: RestartComponent;
  let fixture: ComponentFixture<RestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

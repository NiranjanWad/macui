import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotControlComponent } from './pilot-control.component';

describe('PilotControlComponent', () => {
  let component: PilotControlComponent;
  let fixture: ComponentFixture<PilotControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

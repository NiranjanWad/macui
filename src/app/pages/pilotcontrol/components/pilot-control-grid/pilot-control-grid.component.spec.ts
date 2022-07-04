import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotControlGridComponent } from './pilot-control-grid.component';

describe('PilotControlGridComponent', () => {
  let component: PilotControlGridComponent;
  let fixture: ComponentFixture<PilotControlGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotControlGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotControlGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

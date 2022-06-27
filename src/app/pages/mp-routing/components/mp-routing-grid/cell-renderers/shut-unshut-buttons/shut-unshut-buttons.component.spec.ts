import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShutUnshutButtonsComponent } from './shut-unshut-buttons.component';

describe('ShutUnshutButtonsComponent', () => {
  let component: ShutUnshutButtonsComponent;
  let fixture: ComponentFixture<ShutUnshutButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShutUnshutButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShutUnshutButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

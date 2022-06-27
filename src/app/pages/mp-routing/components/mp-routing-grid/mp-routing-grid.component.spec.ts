import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpRoutingGridComponent } from './mp-routing-grid.component';

describe('MpRoutingGridComponent', () => {
  let component: MpRoutingGridComponent;
  let fixture: ComponentFixture<MpRoutingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpRoutingGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpRoutingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

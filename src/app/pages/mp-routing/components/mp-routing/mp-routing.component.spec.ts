import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpRoutingComponent } from './mp-routing.component';

describe('MpRoutingComponent', () => {
  let component: MpRoutingComponent;
  let fixture: ComponentFixture<MpRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmingMenuComponent } from './dimming-menu.component';

describe('DimmingMenuComponent', () => {
  let component: DimmingMenuComponent;
  let fixture: ComponentFixture<DimmingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimmingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimmingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

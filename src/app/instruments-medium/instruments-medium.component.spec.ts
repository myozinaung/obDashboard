import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsMediumComponent } from './instruments-medium.component';

describe('InstrumentsMediumComponent', () => {
  let component: InstrumentsMediumComponent;
  let fixture: ComponentFixture<InstrumentsMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentsMediumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

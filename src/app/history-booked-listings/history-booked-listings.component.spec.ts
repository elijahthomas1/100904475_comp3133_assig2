import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBookedListingsComponent } from './history-booked-listings.component';

describe('HistoryBookedListingsComponent', () => {
  let component: HistoryBookedListingsComponent;
  let fixture: ComponentFixture<HistoryBookedListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBookedListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBookedListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

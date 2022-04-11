import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAllComponent } from './user-view-all.component';

describe('UserViewAllComponent', () => {
  let component: UserViewAllComponent;
  let fixture: ComponentFixture<UserViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

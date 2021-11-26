import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurOrdersComponent } from './cur-orders.component';

describe('CurOrdersComponent', () => {
  let component: CurOrdersComponent;
  let fixture: ComponentFixture<CurOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

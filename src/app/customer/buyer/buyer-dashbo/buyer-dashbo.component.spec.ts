import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboComponent } from './buyer-dashbo.component';

describe('BuyerDashboComponent', () => {
  let component: BuyerDashboComponent;
  let fixture: ComponentFixture<BuyerDashboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerDashboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerDashboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetPremiumPage } from './get-premium.page';

describe('GetPremiumPage', () => {
  let component: GetPremiumPage;
  let fixture: ComponentFixture<GetPremiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetPremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

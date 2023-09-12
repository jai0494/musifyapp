import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FreePlanPage } from './free-plan.page';

describe('FreePlanPage', () => {
  let component: FreePlanPage;
  let fixture: ComponentFixture<FreePlanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FreePlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

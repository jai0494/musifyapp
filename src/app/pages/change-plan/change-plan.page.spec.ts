import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangePlanPage } from './change-plan.page';

describe('ChangePlanPage', () => {
  let component: ChangePlanPage;
  let fixture: ComponentFixture<ChangePlanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangePlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

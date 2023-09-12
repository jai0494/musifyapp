import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPlansPage } from './view-plans.page';

describe('ViewPlansPage', () => {
  let component: ViewPlansPage;
  let fixture: ComponentFixture<ViewPlansPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewPlansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

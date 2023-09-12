import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DobPage } from './dob.page';

describe('DobPage', () => {
  let component: DobPage;
  let fixture: ComponentFixture<DobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

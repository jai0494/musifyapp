import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinueWithPhonePage } from './continue-with-phone.page';

describe('ContinueWithPhonePage', () => {
  let component: ContinueWithPhonePage;
  let fixture: ComponentFixture<ContinueWithPhonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContinueWithPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

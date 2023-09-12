import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseGenderPage } from './choose-gender.page';

describe('ChooseGenderPage', () => {
  let component: ChooseGenderPage;
  let fixture: ComponentFixture<ChooseGenderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChooseGenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAccountTermsPage } from './create-account-terms.page';

describe('CreateAccountTermsPage', () => {
  let component: CreateAccountTermsPage;
  let fixture: ComponentFixture<CreateAccountTermsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateAccountTermsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpPasswordPage } from './sign-up-password.page';

describe('SignUpPasswordPage', () => {
  let component: SignUpPasswordPage;
  let fixture: ComponentFixture<SignUpPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignUpPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

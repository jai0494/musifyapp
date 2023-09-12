import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBlendPage } from './create-blend.page';

describe('CreateBlendPage', () => {
  let component: CreateBlendPage;
  let fixture: ComponentFixture<CreateBlendPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateBlendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

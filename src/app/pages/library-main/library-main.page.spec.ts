import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryMainPage } from './library-main.page';

describe('LibraryMainPage', () => {
  let component: LibraryMainPage;
  let fixture: ComponentFixture<LibraryMainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LibraryMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

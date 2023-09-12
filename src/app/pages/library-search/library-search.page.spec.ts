import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibrarySearchPage } from './library-search.page';

describe('LibrarySearchPage', () => {
  let component: LibrarySearchPage;
  let fixture: ComponentFixture<LibrarySearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LibrarySearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

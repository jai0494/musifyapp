import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddArtistsPage } from './add-artists.page';

describe('AddArtistsPage', () => {
  let component: AddArtistsPage;
  let fixture: ComponentFixture<AddArtistsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

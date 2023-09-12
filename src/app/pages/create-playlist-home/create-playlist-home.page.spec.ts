import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePlaylistHomePage } from './create-playlist-home.page';

describe('CreatePlaylistHomePage', () => {
  let component: CreatePlaylistHomePage;
  let fixture: ComponentFixture<CreatePlaylistHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreatePlaylistHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

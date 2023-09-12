import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePlaylistIntroPage } from './create-playlist-intro.page';

describe('CreatePlaylistIntroPage', () => {
  let component: CreatePlaylistIntroPage;
  let fixture: ComponentFixture<CreatePlaylistIntroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreatePlaylistIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

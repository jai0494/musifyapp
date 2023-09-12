import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinueWithSpotifyPage } from './continue-with-spotify.page';

describe('ContinueWithSpotifyPage', () => {
  let component: ContinueWithSpotifyPage;
  let fixture: ComponentFixture<ContinueWithSpotifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContinueWithSpotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

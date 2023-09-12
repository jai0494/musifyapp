import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoosePodcastsPage } from './choose-podcasts.page';

describe('ChoosePodcastsPage', () => {
  let component: ChoosePodcastsPage;
  let fixture: ComponentFixture<ChoosePodcastsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChoosePodcastsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

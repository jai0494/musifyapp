import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentPlayedPage } from './recent-played.page';

describe('RecentPlayedPage', () => {
  let component: RecentPlayedPage;
  let fixture: ComponentFixture<RecentPlayedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecentPlayedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

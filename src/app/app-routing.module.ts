import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'search-tab',
    loadChildren: () => import('./pages/search-tab/search-tab.module').then( m => m.SearchTabPageModule)
  },
  {
    path: 'search-list',
    loadChildren: () => import('./pages/search-list/search-list.module').then( m => m.SearchListPageModule)
  },
  {
    path: 'library-main',
    loadChildren: () => import('./pages/library-main/library-main.module').then( m => m.LibraryMainPageModule)
  },
  {
    path: 'library-search',
    loadChildren: () => import('./pages/library-search/library-search.module').then( m => m.LibrarySearchPageModule)
  },
  {
    path: 'create-playlist-intro',
    loadChildren: () => import('./pages/create-playlist-intro/create-playlist-intro.module').then( m => m.CreatePlaylistIntroPageModule)
  },
  {
    path: 'create-playlist-home',
    loadChildren: () => import('./pages/create-playlist-home/create-playlist-home.module').then( m => m.CreatePlaylistHomePageModule)
  },
  {
    path: 'create-blend',
    loadChildren: () => import('./pages/create-blend/create-blend.module').then( m => m.CreateBlendPageModule)
  },
  {
    path: 'add-artists',
    loadChildren: () => import('./pages/add-artists/add-artists.module').then( m => m.AddArtistsPageModule)
  },
  {
    path: 'choose-podcasts',
    loadChildren: () => import('./pages/choose-podcasts/choose-podcasts.module').then( m => m.ChoosePodcastsPageModule)
  },
  {
    path: 'premium',
    loadChildren: () => import('./pages/premium/premium.module').then( m => m.PremiumPageModule)
  },
  {
    path: 'get-premium',
    loadChildren: () => import('./pages/get-premium/get-premium.module').then( m => m.GetPremiumPageModule)
  },
  {
    path: 'continue-with-spotify',
    loadChildren: () => import('./pages/continue-with-spotify/continue-with-spotify.module').then( m => m.ContinueWithSpotifyPageModule)
  },
  {
    path: 'view-plans',
    loadChildren: () => import('./pages/view-plans/view-plans.module').then( m => m.ViewPlansPageModule)
  },
  {
    path: 'change-plan',
    loadChildren: () => import('./pages/change-plan/change-plan.module').then( m => m.ChangePlanPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'free-plan',
    loadChildren: () => import('./pages/free-plan/free-plan.module').then( m => m.FreePlanPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'recent-played',
    loadChildren: () => import('./pages/recent-played/recent-played.module').then( m => m.RecentPlayedPageModule)
  },
  {
    path: 'sign-up-password',
    loadChildren: () => import('./pages/sign-up-password/sign-up-password.module').then( m => m.SignUpPasswordPageModule)
  },
  {
    path: 'home-page2',
    loadChildren: () => import('./pages/home-page2/home-page2.module').then( m => m.HomePage2PageModule)
  },
  {
    path: 'dob',
    loadChildren: () => import('./pages/dob/dob.module').then( m => m.DobPageModule)
  },
  {
    path: 'choose-gender',
    loadChildren: () => import('./pages/choose-gender/choose-gender.module').then( m => m.ChooseGenderPageModule)
  },
  {
    path: 'create-account-terms',
    loadChildren: () => import('./pages/create-account-terms/create-account-terms.module').then( m => m.CreateAccountTermsPageModule)
  },
  {
    path: 'continue-with-phone',
    loadChildren: () => import('./pages/continue-with-phone/continue-with-phone.module').then( m => m.ContinueWithPhonePageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then( m => m.OtpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

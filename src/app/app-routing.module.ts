import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListingComponent } from './add-listing/add-listing.component';
import { AdminViewAllComponent } from './admin-view-all/admin-view-all.component';
import { AppComponent } from './app.component';
import { HistoryBookedListingsComponent } from './history-booked-listings/history-booked-listings.component';
import { LoginComponent } from './login/login.component';
import { SearchListingsComponent } from './search-listings/search-listings.component';
import { SignupComponent } from './signup/signup.component';
import { UserViewAllComponent } from './user-view-all/user-view-all.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user-view-all', component: UserViewAllComponent},
  { path: 'admin-view-all', component: AdminViewAllComponent},
  { path: 'history-booked-listings', component: HistoryBookedListingsComponent},
  { path: 'search-listings', component: SearchListingsComponent},
  { path: 'add-listing', component: AddListingComponent},
  { path: '*', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

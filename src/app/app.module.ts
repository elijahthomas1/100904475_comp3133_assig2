import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GraphQLModule } from './graphql.module';
import { UserViewAllComponent } from './user-view-all/user-view-all.component';
import { HistoryBookedListingsComponent } from './history-booked-listings/history-booked-listings.component';
import { SearchListingsComponent } from './search-listings/search-listings.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { AdminViewAllComponent } from './admin-view-all/admin-view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    UserViewAllComponent,
    HistoryBookedListingsComponent,
    SearchListingsComponent,
    AddListingComponent,
    AdminViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ApolloModule,
    HttpClientModule,
    GraphQLModule,
    
  ],
  providers: [
    /*
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            //replace your graphql url http://localhost:3000/graphql
            uri: "http://localhost:5000"
          }),
        };
      },
      deps: [HttpLink],
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

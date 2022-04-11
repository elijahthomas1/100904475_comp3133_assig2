import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { Booking } from '../models/booking';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-admin-view-all',
  templateUrl: './admin-view-all.component.html',
  styleUrls: ['./admin-view-all.component.css']
})
export class AdminViewAllComponent implements OnInit {

  private querySubscription: Subscription = new Subscription;
  listings: any;
  loading: boolean = true;

  private GET_LISTINGS = gql`
    query getAllListings {
      listings {
        listing_id
        listing_title
        description
        street
        city
        postal_code
        price
        email
        username
      }
    }
  `

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit(): void {
    this.listings = this.apollo.query({
      query: this.GET_LISTINGS,
      variables: {

      }
    })
  }

  listingList:Listing[] = [
    new Listing("1", "Cottage", "log cabin in woods", "25 forest road", "Muskoka", "R7TV8Y", 500, "fake@email.com", "steve"),
    new Listing("2", "Mansion", "giant mansion, over 10000 sq feet", "100 fake st", "Toronto", "M4TY2Y", 1000, "fake@email.com", "steve"),
    new Listing("3", "Condo", "large condo conveniently located in downtown toronto", "25 yonge st", "Toronto", "G4UI79", 200, "fake@email.com", "steve"),
    new Listing("4", "Penthouse", "penthouse condo on the top floor of large condo in toronto", "5000 king st", "Toronot", "R7TV8Y", 5000, "fake@email.com", "steve"),
    new Listing("5", "Cabin", "log cabin in woods", "25 forest road", "Muskoka", "R7TV8Y", 500, "fake@email.com", "steve")
  ];

  goLogin() {
    this.router.navigate(['login']);
  }

  addListing() {
    this.router.navigate(['add-listing'])
  }

}

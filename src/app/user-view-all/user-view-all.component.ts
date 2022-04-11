import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { Booking } from '../models/booking';
import { Listing } from '../models/listing';


@Component({
  selector: 'app-user-view-all',
  templateUrl: './user-view-all.component.html',
  styleUrls: ['./user-view-all.component.css']
})
export class UserViewAllComponent implements OnInit {

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

  private MAKE_BOOKING = gql`
    mutation addBooking($listing_id: String!
            $booking_id: String!
            $booking_date: String!
            $booking_start: String!
            $booking_end: String!
            $username: String!) {
              listing_id
              booking_id
              booking_date
              booking_start
              booking_end
              username 
            }
  `

  bookingForm = new FormGroup({
    booking_id: new FormControl('', Validators.required),
    booking_date: new FormControl('', Validators.required),
    booking_start: new FormControl('', Validators.required),
    booking_end: new FormControl('', Validators.required),
  })

  listing_id: string | undefined;
  booking_id: string | undefined;
  booking_date: string | undefined;
  booking_start: string | undefined;
  booking_end: string | undefined;
  username: string | null;

  constructor(private router: Router, private apollo: Apollo) { 
    this.username = "";
  }

  onSubmit(listing_id: string) {
    this.listing_id = listing_id;
    this.booking_id = this.bookingForm.value.booking_id
    this.booking_date = this.bookingForm.value.booking_date
    this.booking_start = this.bookingForm.value.booking_start
    this.booking_end = this.bookingForm.value.booking_end
    this.username = localStorage.getItem("username")
    this.apollo.mutate({
      mutation: this.MAKE_BOOKING,
      variables: {
        listing_id: this.listing_id,
        booking_id: this.booking_id,
        booking_date: this.booking_date,
        booking_start: this.booking_start,
        booking_end: this.booking_end,
        username: this.username
      }
    })
    this.router.navigate(['history-booked-listings']);
  }

  listingList:Listing[] = [
    new Listing("1", "Cottage", "log cabin in woods", "25 forest road", "Muskoka", "R7TV8Y", 500, "fake@email.com", "steve"),
    new Listing("2", "Mansion", "giant mansion, over 10000 sq feet", "100 fake st", "Toronto", "M4TY2Y", 1000, "fake@email.com", "steve"),
    new Listing("3", "Condo", "large condo conveniently located in downtown toronto", "25 yonge st", "Toronto", "G4UI79", 200, "fake@email.com", "steve"),
    new Listing("4", "Penthouse", "penthouse condo on the top floor of large condo in toronto", "5000 king st", "Toronot", "R7TV8Y", 5000, "fake@email.com", "steve"),
    new Listing("5", "Cabin", "log cabin in woods", "25 forest road", "Muskoka", "R7TV8Y", 500, "fake@email.com", "steve")
  ];

  goBookings() {
    this.router.navigate(['history-booked-listings']);
  }

  goSearch() {
    this.router.navigate(['search-listings']);
  }



  ngOnInit(): void {
    
  }

  /*
  ngOnInit(): void {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: this.GET_LISTINGS
    })
    .valueChanges
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      console.log(this.loading);
      this.listings = data.listings;
      console.log(this.listings);
    })
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
  */

}

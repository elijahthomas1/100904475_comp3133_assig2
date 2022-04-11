import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { Booking } from '../models/booking';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-history-booked-listings',
  templateUrl: './history-booked-listings.component.html',
  styleUrls: ['./history-booked-listings.component.css']
})
export class HistoryBookedListingsComponent implements OnInit {

  private querySubscription: Subscription = new Subscription;
  listings: any;
  bookings: any;
  loading: boolean = true;

  private GET_BOOKINGS = gql`
    query getBookingsByUsername ($username: String!) {
      bookings {
        listing_id
        booking_id
        booking_date
        booking_start
        booking_end
        username 
      }
    }
  `

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit(): void {
    this.bookings = this.apollo.query({
      query: this.GET_BOOKINGS,
      variables: {

      }
    })
    
  }

  bookingList:Booking[] = [
    new Booking("1", "1", "jan 1", " jan 10", "jan 15", "steve"),
    new Booking("2", "2", "mar 10", " mar 10", "mar 10", "steve"),
    new Booking("3", "3", "july 23", " aug 12", "aug 15", "steve"),
    new Booking("4", "4", "feb 26", " feb 28", "mar 4", "steve"),
    new Booking("5", "5", "jan 12", " jan 20", "jan 25", "steve"),
  ]

  goBack() {
    this.router.navigate(['user-view-all'])
  }

}

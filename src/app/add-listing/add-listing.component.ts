import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { Booking } from '../models/booking';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  private querySubscription: Subscription = new Subscription;
  listings: any;
  bookings: any;
  loading: boolean = true;

  private MAKE_LISTING = gql`
    mutation addListing($listing_id: String!
              $listing_title: String!
              $description: String!
              $street: String!
              $city: String!
              $postal_code: String!
              $price: number!
              $email: String!
              $username: String!) {
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
  `

  listingForm = new FormGroup({
              listing_id: new FormControl('', Validators.required),
              listing_title: new FormControl('', Validators.required),
              description: new FormControl('', Validators.required),
              street: new FormControl('', Validators.required),
              city: new FormControl('', Validators.required),
              postal_code: new FormControl('', Validators.required),
              price: new FormControl('', Validators.required),
              email: new FormControl('', Validators.required),
              username: new FormControl('', Validators.required),
  })

  listing_id: string | undefined;
  listing_title: string | undefined;
  description: string | undefined;
  street: string | undefined;
  city: string | undefined;
  postal_code: string | undefined;
  price: number | undefined;
  email: string | undefined;
  username: string | undefined;

  onSubmit() {
    this.listing_id = this.listingForm.value.
    this.listing_title = this.listingForm.value.listing_title
    this.description = this.listingForm.value.description
    this.street = this.listingForm.value.street
    this.city = this.listingForm.value.city
    this.postal_code = this.listingForm.value.postal_code
    this.price = this.listingForm.value.price
    this.email = this.listingForm.value.email
    this.username = this.listingForm.value.username
    this.apollo.mutate({
      mutation: this.MAKE_LISTING,
      variables: {
        listing_id: this.listing_id,
        listing_title: this.listing_title,
        description: this.description,
        street: this.street,
        city: this.city,
        postal_code: this.postal_code,
        price: this.price,
        email: this.email,
        username: this.username,
      }
    })
    this.router.navigate(['admin-view-all'])
  }

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['admin-view-all']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { Booking } from '../models/booking';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-search-listings',
  templateUrl: './search-listings.component.html',
  styleUrls: ['./search-listings.component.css']
})
export class SearchListingsComponent implements OnInit {

  private querySubscription: Subscription = new Subscription;
  listings: any;
  loading: boolean = true;
  loadName: boolean = false;
  loadCity: boolean = false;
  loadPostal: boolean = false;
  listing_title: string | undefined;
  city: string | undefined;
  postal_code: string | undefined;

  private GET_LISTINGS_BY_NAME= gql`
    query getListingByName ($listing_title: String!) {
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

  private GET_LISTINGS_BY_CITY = gql`
  query getListingByCity($city: String!) {
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

  private GET_LISTINGS_BY_POSTALCODE = gql`
      query getListingByPostalCode($postal_code: String!) {
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

    nameForm = new FormGroup({
      listing_title: new FormControl('', Validators.required)
    })

    cityForm = new FormGroup({
      city: new FormControl('', Validators.required)
    })

    postalForm = new FormGroup({
      postal_code: new FormControl('', Validators.required)
    })

    searchName() {
      this.listing_title = this.nameForm.value.listing_title
      this.listings = this.apollo.query({
        query: this.GET_LISTINGS_BY_NAME,
        variables: {
          listing_title: this.listing_title
        }
      })
      this.loadName = true;
    }

    searchCity() {
      this.city = this.cityForm.value.city
      this.listings = this.apollo.query({
        query: this.GET_LISTINGS_BY_NAME,
        variables: {
          city: this.city
        }
      })
      this.loadCity = true;
    }

    searchPostal() {
      this.postal_code = this.cityForm.value.postal_code
      this.listings = this.apollo.query({
        query: this.GET_LISTINGS_BY_NAME,
        variables: {    
          postal_code: this.postal_code    
        }
      })
      this.loadPostal = true;
    }

  

  listingList:Listing[] = [
    new Listing("1", "Cottage", "log cabin in woods", "25 forest road", "Muskoka", "R7TV8Y", 500, "fake@email.com", "steve"),
    new Listing("2", "Mansion", "giant mansion, over 10000 sq feet", "100 fake st", "Toronto", "M4TY2Y", 1000, "fake@email.com", "steve"),
    new Listing("3", "Condo", "large condo conveniently located in downtown toronto", "25 yonge st", "Toronto", "G4UI79", 200, "fake@email.com", "steve"),
    new Listing("4", "Penthouse", "penthouse condo on the top floor of large condo in toronto", "5000 king st", "Toronot", "R7TV8Y", 5000, "fake@email.com", "steve"),
    new Listing("5", "Cabin", "log cabin in woods", "25 forest road", "Muskoka", "R7TV8Y", 500, "fake@email.com", "steve")
  ];


  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['user-view-all']);
  }

}

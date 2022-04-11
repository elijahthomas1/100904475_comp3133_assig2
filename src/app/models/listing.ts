export class Listing {
    listing_id: string 
    listing_title: string
    description: string
    street: string
    city: string
    postal_code: string
    price: number
    email: string
    username: string

    constructor(listing_id: string, 
        listing_title: string,
        description: string,
        street: string,
        city: string,
        postal_code: string,
        price: number ,
        email: string,
        username: string) {
            this.listing_title = listing_title
            this.listing_id = listing_id
            this.description = description
            this.street = street
            this.city = city
            this.postal_code = postal_code
            this.price = price
            this.email = email
            this.username = username

        }
}

export class Booking {
    listing_id: string
    booking_id: string
    booking_date: string
    booking_start: string
    booking_end: string
    username: string

    constructor(listing_id: string,
        booking_id: string,
        booking_date: string,
        booking_start: string,
        booking_end: string,
        username: string) {
            this.listing_id = listing_id
            this.booking_id = booking_id
            this.booking_date = booking_date
            this.booking_start = booking_start
            this.booking_end = booking_end
            this.username = username
        }
}

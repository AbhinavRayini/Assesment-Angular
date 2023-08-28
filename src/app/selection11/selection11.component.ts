import { Component } from '@angular/core';
interface Seat {
  name: string;
  price: number;
}
@Component({
  selector: 'app-selection11',
  templateUrl: './selection11.component.html',
  styleUrls: ['./selection11.component.css']
})
export class Selection11Component {

  seats: Seat[] = [
    { name: 'Silver', price: 10 },
    { name: 'Gold', price: 15 },
    { name: 'Platinum', price: 20 },
    // add more seats here...
  ];
  selectedSeats: number[] = Array(this.seats.length).fill(0);

  addSeat(index: number) {
    this.selectedSeats[index]++;
  }

  subtractSeat(index: number) {
    if (this.selectedSeats[index] > 0) {
      this.selectedSeats[index]--;
    }
  }

  getTotalPrice(): number {
    let total = 0;
    for (let i = 0; i < this.seats.length; i++) {
      total += this.selectedSeats[i] * this.seats[i].price;
    }
    return total;
  }
  // ngOnInit(): void {
  //   alert("Booking Is Confirmed");
  // }
}

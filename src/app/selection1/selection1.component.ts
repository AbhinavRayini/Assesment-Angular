import { Component } from '@angular/core';
interface Seat {
  name: string;
  price: number;
}
@Component({
  selector: 'app-selection1',
  templateUrl: './selection1.component.html',
  styleUrls: ['./selection1.component.css']
})
export class Selection1Component {
  seats: Seat[] = [
    { name: 'A-Block', price: 10 },
    { name: 'B-Block', price: 15 },
    { name: 'C-Block', price: 20 },
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
    
  // alert("Booking Is Confirmed");
  // }
}


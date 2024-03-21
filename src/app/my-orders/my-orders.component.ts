import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent {
  @Input() order:any;
  @Output() changeQuantity = new EventEmitter(); // creating event
  constructor() { }

  ngOnInit(): void {
  }

  quantityChange() {
    this.changeQuantity.emit(); // emitted event
  }

}

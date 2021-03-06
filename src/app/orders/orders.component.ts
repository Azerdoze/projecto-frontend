import { Component, OnInit } from '@angular/core';

import { Orders } from '../models/orders';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Orders[];
  order: Orders | undefined;

  
  
  constructor(
    private orderService: OrdersService) {
    
  };
  
  
  ngOnInit(): void {
    this.orderService.getOrders().subscribe( data => this.orders = data );
  }
  
}

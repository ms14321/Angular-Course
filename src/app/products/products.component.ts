import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
  products = [
    {id:1, name: 'Minimalists Analog Watch', price: '$109', color: 'Black', available: 'Available', image: '/assets/products/product-image-1.webp'},
    {id:2, name: 'Hisense UlrtrabHD Smart Tv', price:'$3339',color:'Black',available:'available',image:'/assets/products/product-image-2.webp'},
    {id:3, name: 'APPLE iPhone 12', price: '$1855', color: 'Black', available: 'Not Available', image: '/assets/products/product-image-3.jpg'},
    {id:4, name: 'LG Fully Automatic Washing Machine', price: '$1765', color: 'White', available: 'Available', image: '/assets/products/product-image-4.webp'},
    {id:5, name: 'LG Refrigerator with Door Cooling', price: '$2815', color: 'White', available: 'Not Available', image: '/assets/products/product-image-5.webp'},
    {id:6, name: 'DELL Inspiron One 27 Ryzen 7', price: '$2145', color: 'White', available: 'Available', image: '/assets/products/product-image-6.webp'}
  ];

}
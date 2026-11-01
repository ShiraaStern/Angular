import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ProductComponent,NgFor],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  electronicDevices = [
    {
      name: 'Laptop',
      company: 'Dell',
      description: 'Powerful laptop for work and play',
      price: 1000,
      discount: 10
    },
    {
      name: 'Smartphone',
      company: 'Apple',
      description: 'Latest smartphone with advanced features',
      price: 800,
      discount: 15
    },
    {
      name: 'Tablet',
      company: 'Samsung',
      description: 'Versatile tablet for entertainment and productivity',
      price: 600,
      discount: 20
    }
  ];
}

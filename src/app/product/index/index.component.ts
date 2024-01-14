import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  product: Product[] = [];

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((response: Product[]) => {
      this.product = response;

      console.log(this.product);
    });
  }

  handleEdit(id: number): void {
    // console.log(id);

    this.router.navigate([`product/,${id}/edit`]);
  }

  handleDelete(id: number): void {
    // this.router.navigate([`product/,${id}/edit`]);
    this.productService.delete(id).subscribe((res) => {
      console.log(res);
    });
  }
}

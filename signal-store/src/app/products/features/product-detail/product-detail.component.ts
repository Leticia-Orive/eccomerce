import { Component, inject,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``
})
export default class ProductDetailComponent {
  private activatedRoute= inject(ActivatedRoute);
  constructor() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }

}

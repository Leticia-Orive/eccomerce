import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailStateService],
})
export default class ProductDetailComponent {
  /*obtener los parametros de la ruta * 

  private activatedRoute= inject(ActivatedRoute);
  constructor() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }*/
  productDetailState = inject(ProductDetailStateService).state;
  id = input.required<string>();
  constructor(){
    effect(() => {
      console.log(this.id);
      this.productDetailState.getById(this.id());
    });
  }

}

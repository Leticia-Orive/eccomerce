import { Component, effect, input } from '@angular/core';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``
})
export default class ProductDetailComponent {
  /*obtener los parametros de la ruta * 

  private activatedRoute= inject(ActivatedRoute);
  constructor() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }*/
  id = input.required<string>();
  constructor(){
    effect(() => {
      console.log(this.id);
    });
  }

}

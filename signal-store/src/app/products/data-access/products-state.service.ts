import { Injectable, inject } from "@angular/core";
import { signalSlice } from "ngxtension/signal-slice";
import { map } from "rxjs";
import { ProductsService } from "./products.service";
import { Product } from "../../shared/interfaces/product.interface";

interface State {
    products: Product[];
    status: | 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsStateService {
    private productsService = inject(ProductsService);


    private initialState: State = {
        products: [],
        status: 'loading' as const,
    };
    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.productsService
            .getProducts()
            .pipe(map((products) => ({products, status: 'success' as const}))),

        ]
    });
}
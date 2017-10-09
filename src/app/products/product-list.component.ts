import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
pageTitle: String ='Product List';
imageWidth: number = 25;
imageMargin: number = 2;
showImage: boolean = false;
errorMessage: string;
_listFilter: string;
get listFilter(): string{
    return this._listFilter;
}
set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
}
filteredProducts: IProduct[];
products: IProduct[];

    constructor(private _productService: ProductService){
        
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List' + message;
    }
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toogleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            }, err => this.errorMessage = <any>Error);
    }

}
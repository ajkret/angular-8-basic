import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';


interface Product {
  cod: number;
  description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  sub: any;
  
  title = 'Hello everybody';

  listProducts: Product[];

  constructor(private httpClient: HttpClient) {
    this.listProducts = [];
  }

  ngOnInit(): void {

    this.title = 'Bloody Bastards!!!'

    this.sub = this.httpClient.get('api/products.json')
      .pipe(
        delay(2000),
        map((data:any) => {
          console.log(data);
          data.products.forEach(element => {
            this.listProducts.push(element);
          });
        })

      ).subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

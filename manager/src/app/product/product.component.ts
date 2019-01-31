import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allproducts: any = null;
  constructor(private _router: Router, private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this.showAllProducts();
  }
  showAllProducts() {
    let obs = this._httpService.getAllProducts();
    obs.subscribe(data => {
      this.allproducts = data;
    })
  }
  deleteProduct(id) {
    let obs = this._httpService.deleteProduct(id);
    obs.subscribe(data => {
      console.log("deleted this", data);
    })
    this.showAllProducts();
  }
}

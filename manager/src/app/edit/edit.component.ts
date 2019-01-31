import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductComponent } from './../product/product.component'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editProduct: any = { title: "", price: Number, imgurl: "" };
  id: any;
  error: any = null;
  constructor(private _pComp: ProductComponent, private _router: Router, private _route: ActivatedRoute, private _httpService: HttpService) {

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params.id;
      this.findId(this.id);
    })
  }
  findId(id) {
    let obs = this._httpService.getProduct(id);
    obs.subscribe(data => {
      this.editProduct = data;
    })
  }
  editing() {
    let obs = this._httpService.updateProduct(this.editProduct);
    obs.subscribe(data => {
      if (data['message']) {
        this.error = data['message'];
      }
    })
    this._pComp.showAllProducts();
  }
  deleteProduct(id) {
    let obs = this._httpService.deleteProduct(id);
    obs.subscribe(data => {
      console.log("deleted this", data);
    })
  }


}

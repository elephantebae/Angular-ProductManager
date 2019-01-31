import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct: any;
  constructor(private _router: Router, private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this.newProduct = { title: "", price: null, imgurl: "" };
  }
  createProduct() {
    let obs = this._httpService.createProduct(this.newProduct);
    obs.subscribe(data => {
      console.log("this was created", data);
    })
    this._router.navigate(['/products']);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts() {
    return this._http.get("/api/allProducts");
  }
  updateProduct(editedProduct) {
    return this._http.put("/api/" + editedProduct._id, editedProduct);
  }
  getProduct(id) {
    return this._http.get("/api/" + id);
  }
  deleteProduct(id) {
    return this._http.delete("/api/" + id);
  }
  createProduct(newProduct) {
    return this._http.post("/api/newProduct", newProduct);
  }
}

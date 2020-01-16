import { Component, OnInit } from "@angular/core";
import products from "../../Models/products.json";
@Component({
  selector: "app-catalogue",
  templateUrl: "./catalogue.component.html",
  styleUrls: ["./catalogue.component.css"]
})
export class CatalogueComponent implements OnInit {
  listProducts: any[] = products;
  constructor() {}

  ngOnInit() {}
}

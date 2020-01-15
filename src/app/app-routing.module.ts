import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatalogueComponent } from "./Components/catalogue/catalogue.component";

const routes: Routes = [
  {
    path: "catalogue",
    component: CatalogueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

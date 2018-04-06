import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {UnavailableProductPage} from "./unavailableProduct";

@NgModule({
	declarations: [
		UnavailableProductPage,
	],
	imports: [
		IonicPageModule.forChild(UnavailableProductPage),
	],
})
export class UnavailableProductPageModule {
}

import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {VendorHomePage} from "./vendorHome";

@NgModule({
	declarations: [
		VendorHomePage,
	],
	imports: [
		IonicPageModule.forChild(VendorHomePage),
	],
})
export class VendorHomePageModule {
}

import {BasePage} from "../../Pages/BasePage";

export class ProductList extends BasePage{
	constructor(page,container) {
		super (page,container);
	};

	Elements ={
		FlexibleLocatorForProduct:this.container.locator("//div[@class='MuiImageListItemBar-title css-1w4d4gp']"),
	};
};
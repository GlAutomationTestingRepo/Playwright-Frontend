import {BasePage} from "../../Pages/BasePage";

export class CustomerOrders extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	Elements ={
		NameOfItemsInOrder:this.container.locator("//a[@class='MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways RaLink-link css-19ifyur']"),
	};

	get getOrderContainer(){
		return "//div[@class='MuiCardContent-root css-1qw96cp']";
	};
};
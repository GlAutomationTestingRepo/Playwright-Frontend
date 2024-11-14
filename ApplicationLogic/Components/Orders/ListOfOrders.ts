import {BasePage} from "../../Pages/BasePage";

export class ListOfOrders extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	Elements ={
		Reference:this.container.locator("(//span[@class='MuiTypography-root MuiTypography-body2 css-68o8xu'])[2]"),
	};
};
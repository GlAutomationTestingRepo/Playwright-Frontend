import {BasePage} from "../../Pages/BasePage";

export class NavigationThroughOrders extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	Elements ={
		AmountOfPagesInOrder:this.container.locator("//p[@class='MuiTypography-root MuiTypography-body2 css-68o8xu']"),
		NextOrder:this.container.locator("//a[@aria-label='Go to next page']"),
	};
};
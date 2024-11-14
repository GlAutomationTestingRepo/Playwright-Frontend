import {BasePage} from "../../../Pages/BasePage";

export class History extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	Elements ={
		AmountOfOrders:this.container.locator("(//a[@class='MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineAlways RaLink-link css-sdmzfa'])[1]"),
	};

	get getHistoryContainer(){
		return "//div[@class='MuiGrid-root MuiGrid-container css-tuxzvu']";
	};
};
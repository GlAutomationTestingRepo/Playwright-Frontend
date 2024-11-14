import {BasePage} from "../../../Pages/BasePage";

export class ReviewList extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	Elements ={
		Customer:this.container.locator("(//div[@class='MuiTypography-root MuiTypography-body2 css-1wk3cmv'])[1]"),
	};

	get getReviewListContainer(){
		return "//table[@class='MuiTable-root RaDatagrid-table css-1owb465']";
	};
};
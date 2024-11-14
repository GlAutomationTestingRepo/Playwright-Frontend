import {BasePage} from "../../../Pages/BasePage";

export class TabList extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	Elements={
		ReviewsCounter: this.page.locator("//span[@class='MuiTypography-root MuiTypography-body2 css-1si9tzf']"),
		Reviews: this.container.locator("//a[@id='tabheader-reviews']"),
	};

	get getTabListContainer(){
		return "//div[@class='MuiTabs-flexContainer css-k008qs']"
	};
};
import {BasePage} from "../../Pages/BasePage";

export class HeaderToolBar extends BasePage{
	constructor(page,container) {
		super (page,container);
	};
	
	Elements ={
		Create:this.container.locator("//a[@aria-label='Create']"),
	};

	async PressOnCreate(){
		await this.Elements.Create.click();
		await this.page.waitForSelector(this.getCreationContainer);
	};

	get getCreationContainer(){
		return "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root RaCreate-card css-3qgb5u']";
 	};
};
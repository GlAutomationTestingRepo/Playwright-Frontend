import {BasePage} from "../../../Pages/BasePage";

export class ProfileFooterToolBar extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	Elements ={
		Buttons :{
			Delete:this.container.locator("//button[text()='Delete']"),
		},
	};

	async PressOnDelete(){
		await this.page.waitForSelector(this.getToolBarContainer);
		await this.Elements.Buttons.Delete.click();
	};

	get getToolBarContainer(){
		return "//div[@class='RaToolbar-defaultToolbar']";
	};
};
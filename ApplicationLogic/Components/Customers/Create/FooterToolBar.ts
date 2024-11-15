import {expect} from "@playwright/test";
import {BasePage} from "../../../Pages/BasePage";

export class FooterToolBar extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	SubContainers ={
		CustomerCreationPopUP:this.page.locator("//div[@role='alert']"),
	};

	Elements ={
		Buttons :{
			SaveCustomer:this.container.locator("//button[text()='Save']"),
			ReservedButtonForStatus:this.container.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1ynm925']"),
			Delete:this.container.locator("//button[text()='Delete']"),
		},
	};

	async PressOnSave (){
		await this.Elements.Buttons.SaveCustomer.click();
	};
};
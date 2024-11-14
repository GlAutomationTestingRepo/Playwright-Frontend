import {BasePage} from "../../Pages/BasePage";

export class PostersLeftSideFilterWindow extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	Elements ={
		Categories:this.container.locator("//ul[@class='MuiList-root MuiList-dense css-1uzmcsd']"),
	};

	async SelectSpecificCategory (Value:string){
		await this.page.waitForSelector(this.getFiltrationContainer);
		await this.Elements.Categories.locator(`//span[text()='${Value}']`).click();
		await this.page.waitForTimeout(1000);
	};
	
	get getFiltrationContainer(){
		return "//div[@class='MuiCardContent-root css-14x6a5n']";
	};
};
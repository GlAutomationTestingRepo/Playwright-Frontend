import {BasePage} from "../../../Pages/BasePage";

export class Stats extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	SubContainers ={
		DropDownContainer:this.page.locator("//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-r8u8y9' and @role='listbox']"),
	};

	Elements ={
		DropDowns :{
			Segments:this.container.locator("//div[@data-testid='selectArray']"),
			HasNewsLetter:this.container.locator("//span[text()='Has newsletter']"),
		},
	};

	async SelectSegmentValues (SegmentValue:string,OtherSegmentValue:string){
		await this.Elements.DropDowns.Segments.click();
		await this.page.waitForSelector(this.getDropDownContainer);
		await this.SubContainers.DropDownContainer.locator(`//li[text()='${SegmentValue}']`).click();
		await this.SubContainers.DropDownContainer.locator(`//li[text()='${OtherSegmentValue}']`).click();
	};

	get getDropDownContainer(){
		return "//ul[@class='MuiList-root MuiList-padding MuiMenu-list css-r8u8y9' and @role='listbox']";
 	};
};
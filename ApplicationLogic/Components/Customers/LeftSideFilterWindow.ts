import {BasePage} from "../../Pages/BasePage";

export class LeftSideFilterWindow extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	async PressOnSpecificSegment(SegmentValue:string){
		await this.page.waitForSelector(this.getFiltrationContainer);
		await this.container.locator(`//span[text()='${SegmentValue}']`).click();
	};

	get getFiltrationContainer(){
		return "//div[@class='MuiCardContent-root css-14x6a5n']";
	}
};
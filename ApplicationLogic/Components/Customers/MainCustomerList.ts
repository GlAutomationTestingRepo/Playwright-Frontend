import {BasePage} from "../../Pages/BasePage";

export class MainCustomerList extends BasePage {
	constructor(page,container) {
		super (page,container);
	};

	SubContainer={
		InfoField:this.page.locator("//div[@class='MuiSnackbarContent-message css-1w0ym84']")
	};

	Elements ={
		UniqueCustomerLineLocator:this.container.locator("//td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall column-last_name RaDatagrid-rowCell css-1o6fzn1']"),
	};

	async PressOnCreatedCustomer(CustomerName:string){
	await this.Elements.UniqueCustomerLineLocator.locator(`//div[text()='${CustomerName}']`).click();	
	};
};
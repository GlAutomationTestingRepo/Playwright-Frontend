import {BasePage} from "../../../Pages/BasePage";

export class MainCustomerCreationComponent extends BasePage{
	constructor(page,container) {
		super (page,container);
	};

	Elements ={
		InputFields:{
			FirstName:this.container.locator("//input[@name='first_name']"),
			LastName:this.container.locator("//input[@name='last_name']"),
			Email:this.container.locator("//input[@name='email']"),
			Address:this.container.locator("//textarea[@name='address']"),
			City:this.container.locator("//input[@name='city']"),
			State:this.container.locator("//input[@name='stateAbbr']"),
			ZipCode:this.container.locator("//input[@name='zipcode']"),
			Password:this.container.locator("//input[@name='password']"),
			ConfirmPassword:this.container.locator("//input[@name='confirm_password']"),
		},
	};

	async FillUpInputFields (FirstName:string,LastName:string,Email:string,Address:string,City:string,State:string,ZipCode:string,Password:string){
		await this.Elements.InputFields.FirstName.fill(FirstName);
		await this.Elements.InputFields.LastName.fill(LastName);
		await this.Elements.InputFields.Email.fill(Email);
		await this.Elements.InputFields.Address.fill(Address);
		await this.Elements.InputFields.City.fill(City);
		await this.Elements.InputFields.State.fill(State);
		await this.Elements.InputFields.ZipCode.fill(ZipCode);
		await this.Elements.InputFields.Password.fill(Password);
		await this.Elements.InputFields.ConfirmPassword.fill(Password);
	};
};
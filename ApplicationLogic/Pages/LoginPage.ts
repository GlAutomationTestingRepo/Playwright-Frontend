import { LoginCredentials } from "../../../Utils/Enums";
import {BasePage} from "./BasePage";

export class LoginPage extends BasePage{
    static LogIn(Login: LoginCredentials, Password: LoginCredentials) {
        throw new Error('Method not implemented.');
    }

    constructor(page,container) {
		super (page,container);
	};

    Elements={
        InputFields:{
            Username:this.container.locator("//input[@name='username']"),
            Password:this.container.locator("//input[@name='password']"),
        },
        Buttons:{
            SignIn:this.container.locator("//button[@type='submit']"),
        },
    };

    async LogIn(Username:string,Password:string){
        await this.Elements.InputFields.Username.fill(Username);
        await this.Elements.InputFields.Password.fill(Password);
        await this.Elements.Buttons.SignIn.click();
        await this.page.waitForSelector(this.getNextPageContainer);
    };

    get getNextPageContainer(){
        return "//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-3qgb5u']";
    };
};   
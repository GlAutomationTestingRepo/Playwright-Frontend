import {BasePage} from "../Pages/BasePage"; 

export class SideMenuItems extends BasePage{

    constructor(page,container) {
		super (page,container);
	};

    SubContainers={
        UniqueMenuItemContainer:this.container.locator("//div[@class='MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-c4sutr']"),
    };

    Elements={
        ExpnadingLists:{
            ExpandingList:this.container.locator("//li[@role='menuitem']"),
        },
        MenuItems:{
            MenuItem:this.container.locator("//a[@role='menuitem']"),
        },
    };

    async SelectSpecificMenuItem(SideMenuEnums:string){
        await this.container.locator(`//a[@href='${SideMenuEnums}']`).click();
    };
};
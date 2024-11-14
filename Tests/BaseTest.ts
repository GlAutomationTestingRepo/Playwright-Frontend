import {test as base, Page} from '@playwright/test'; 
import {PageeManager} from '../ApplicationLogic/Pages/PageeManager';

import {LoginCredentials} from '../Utils/Enums';


export type TestOptions = {
    domain: string
};

export const test = base.extend<TestOptions & {page:Page,pageManager:PageeManager}> ({
    domain: ['', {option: true}], 

    page: async ({browser}, use) => {
        const page = await browser.newPage();
        await page.goto('https://marmelab.com/react-admin-demo/#/login');
        await new PageeManager(page).loginPage.LogIn(LoginCredentials.Login,LoginCredentials.Password);
        await use(page);
    },

    pageManager: async ({page}, use) => {
        const pageManager = new PageeManager(page); 
        await use(pageManager); 
    }, 
}); 
import {Page} from "@playwright/test";
import {SideMenuItems} from "../Components/SideMenuItems";
import {HeaderToolBar} from "../Components/Customers/HeaderToolBar";
import {MainCustomerCreationComponent} from "../Components/Customers/Create/MainCustomerCreationContainer";
import {FooterToolBar} from "../Components/Customers/Create/FooterToolBar"
import {Stats} from "../Components/Customers/Create/Stats";
import {LeftSideFilterWindow} from "../Components/Customers/LeftSideFilterWindow";
import {MainCustomerList} from "../Components/Customers/MainCustomerList";
import {ProfileFooterToolBar} from "../Components/Customers/CustomerProfile/ProfileFooterToolBar"
import {PostersLeftSideFilterWindow} from "../Components/Posters/PostersLeftSideFilterWindow";
import {ProductList} from "../Components/Posters/ProductList";
import {TabList} from "../Components/Posters/Product/TabList";
import {ReviewList} from "../Components/Posters/Product/ReviewList";
import {History} from "../Components/Customers/CustomerProfile/History";
import {ListOfOrders} from "../Components/Orders/ListOfOrders";
import {CustomerOrders} from "../Components/Orders/CustomerOrders";
import {NavigationThroughOrders} from "../Components/Orders/NavigationThroughOrders";
import { LoginPage } from "./LoginPage";

export class PageeManager {

	page:Page;
	loginPage;
	sideMenuItems;
	headerToolBar;
	mainCustomerCreationComponent;
	footerToolBar;
	stats;
	leftSideFilterWindow;
	mainCustomerList;
	profileFooterToolBar;
	postersLeftSideFilterWindow;
	productList;
	tabList;
	reviewList;
	history;
	listOfOrders;
	customerOrders;
	navigationThroughOrders;

	constructor(page){
		this.page=page;
		this.loginPage = new LoginPage(page,this.page.locator("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-axzyjk']"));
		this.sideMenuItems = new SideMenuItems(page,this.page.locator("//div[@class='MuiDrawer-root MuiDrawer-docked RaSidebar-docked  css-x2zgkg']"));
		this.headerToolBar = new HeaderToolBar(page,this.page.locator("//div[@class='RaList-actions css-34opws']"));
		this.mainCustomerCreationComponent = new MainCustomerCreationComponent(page,this.page.locator("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root RaCreate-card css-3qgb5u']"));
		this.footerToolBar = new FooterToolBar(page,this.page.locator("//div[@class='RaToolbar-defaultToolbar']"));
		this.stats = new Stats(page,this.page.locator("//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-19egsyp']"));
		this.leftSideFilterWindow = new LeftSideFilterWindow(page,this.page.locator("//div[@class='MuiCardContent-root css-14x6a5n']"));
		this.mainCustomerList = new MainCustomerList(page,this.page.locator("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root RaList-content css-3qgb5u']"));
		this.profileFooterToolBar = new ProfileFooterToolBar(page,this.page.locator("//div[@class='RaToolbar-defaultToolbar']")); 
		this.postersLeftSideFilterWindow = new PostersLeftSideFilterWindow(page,this.page.locator("//div[@class='MuiCardContent-root css-14x6a5n']"));
		this.productList = new ProductList(page,this.page.locator("//ul[@class='MuiImageList-root MuiImageList-standard css-tidt1y']"));
		this.tabList = new TabList(page,this.page.locator("//div[@class='MuiTabs-root css-orq8zk']"));
		this.reviewList = new ReviewList(page,this.page.locator("//table[@class='MuiTable-root RaDatagrid-table css-1owb465']"));
		this.history = new History(page,this.page.locator("//div[@class='MuiGrid-root MuiGrid-container css-tuxzvu']"));
		this.listOfOrders = new ListOfOrders(page,this.page.locator("//tbody[@class='MuiTableBody-root datagrid-body RaDatagrid-tbody css-1xnox0e']"));
		this.customerOrders = new CustomerOrders(page,this.page.locator("(//tbody[@class='MuiTableBody-root css-1xnox0e'])[1]"));
		this.navigationThroughOrders = new NavigationThroughOrders(page,this.page.locator("//div[@role='navigation']"));
	};
};
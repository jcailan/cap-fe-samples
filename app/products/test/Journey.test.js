const { wdi5 } = require("wdio-ui5-service");

describe("Manage Products App", () => {
	let FioriElementsFacade;
	before(async () => {
		FioriElementsFacade = await browser.fe.initialize({
			onTheMainPage: {
				ListReport: {
					appId: "com.jcailan.products",
					componentId: "ProductsList",
					entitySet: "Products"
				}
			},
			onTheDetailPage: {
				ObjectPage: {
					appId: "com.jcailan.products",
					componentId: "ProductsObjectPage",
					entitySet: "Products"
				}
			},
			onTheShell: {
				Shell: {}
			}
		});
	});

	it("should display item details in the Object Page", async () => {
		await FioriElementsFacade.execute((Given, When, Then) => {
			Given.onTheMainPage.onFilterBar().iExecuteSearch();
			When.onTheMainPage.onTable().iPressRow(0);
			Then.onTheDetailPage.iSeeThisPage();
			Then.onTheDetailPage.onHeader().iCheckTitle("Pink Lemonade");
		});
	});
});

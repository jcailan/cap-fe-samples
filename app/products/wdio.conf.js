/* eslint-disable no-nested-ternary */
exports.config = {
	wdi5: {
		screenshotPath: "__screenshots__",
		screenshotsDisabled: false,
		logLevel: "error",
		skipInjectUI5OnStart: false,
		waitForUI5Timeout: 200000
	},
	autoCompileOpts: {
		autoCompile: true,
		tsNodeOpts: {
			transpileOnly: true,
			project: "./test/tsconfig.json"
		}
	},
	specs: ["./test/*.test.js"],
	exclude: [],
	maxInstances: 10,
	capabilities: [
		{
			maxInstances: 5,
			browserName: "chrome",
			"goog:chromeOptions": {
				args:
					process.argv.indexOf("--headless") > -1
						? ["--headless"]
						: process.argv.indexOf("--debug") > -1
							? ["window-size=1440,800", "--auto-open-devtools-for-tabs"]
							: ["window-size=1440,800"]
			},
			acceptInsecureCerts: true
		}
	],
	logLevel: "error",
	bail: 0,
	baseUrl: "http://localhost:4004/launchpage.html#Products-display",
	waitforTimeout: 90000,
	connectionRetryTimeout: 200000,
	connectionRetryCount: 3,
	services: ["chromedriver", "ui5"],
	framework: "mocha",
	reporters: ["spec"],
	mochaOpts: {
		ui: "bdd",
		timeout: 200000
	}
};

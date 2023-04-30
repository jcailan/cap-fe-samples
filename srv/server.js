const cds = require("@sap/cds");
const cdsx = require("@rizing/cds-extension");
const cov2ap = require("@cap-js-community/odata-v2-adapter");
const express = require("express");

cds.on("bootstrap", (app) => {
	cdsx.load();
	app.use(cov2ap());
	app.use("/assets", express.static("assets"));
});
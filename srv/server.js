const cds = require("@sap/cds");
const cov2ap = require("@cap-js-community/odata-v2-adapter");
const express = require("express");

cds.on("bootstrap", (app) => {
	app.use(cov2ap());
	app.use("/assets", express.static("assets"));
});

module.exports = cds.server;
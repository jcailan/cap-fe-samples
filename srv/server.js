/* eslint-disable no-console */
const cds = require("@sap/cds");
const cov2ap = require("@sap/cds-odata-v2-adapter-proxy");
const express = require("express");
const bodyParser = require("body-parser");

cds.on("bootstrap", (app) => {
	app.use(cov2ap());
	app.use("/assets", express.static("assets"));
	app.use("/product", bodyParser.raw({ type: "multipart/mixed" }));
	app.use("/product", (req, res, next) => {
		console.log(req.method, req.originalUrl, req.params);
		console.log(req.body.toString());
		next();
	});
});

module.exports = cds.server;
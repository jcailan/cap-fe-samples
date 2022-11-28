/* eslint-disable no-console */
const metadata = require("./metadata");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 4004;
const app = express();

app.use(/\/product\/.batch/, bodyParser.raw({ type: "multipart/mixed" }));
app.use(/\/product\/.batch/, (req, res) => {
	console.log(req.method, req.originalUrl, req.params);
	console.log(req.body.toString());
	res.status(404).end();
});

app.head("/product/", (req, res) => {
	res.set("x-csrf-token", "hRMP2EcJMMSEn9IacUi1MQ==");
	res.status(200).end();
});

app.get(/\/product\/.metadata/, (req, res) => {
	res.set("Content-Type", "application/xml");
	res.status(200).send(metadata);
});

app.listen(port, () => console.log(`Your server is running on port ${port}`));
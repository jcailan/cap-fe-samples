const cds = require("@sap/cds");
const product = require("./suites/ProductService.test");
const productRemote = require("./suites/ProductRemoteService.test");
const project = __dirname + "/..";
process.env.CDS_TEST_SILENT = true;

describe("Test Suite", function() {
	this.cdstest = process.env.NODE_ENV === "backend" ?
		cds.test("serve", "--in-memory", "--project", project) :
		cds.test("serve", "--with-mocks", "--in-memory", "--project", project);

	describe("ProductService", product.bind(this));
	describe("ProductRemoteService", productRemote.bind(this));
});
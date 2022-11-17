const cds = require("@sap/cds");
const product = require("./suites/ProductService.test");
const project = __dirname + "/..";
process.env.CDS_TEST_SILENT = true;

describe("Test Suite", function() {
	this.cdstest = cds.test(project);
	describe("ProductService", product.bind(this));
});
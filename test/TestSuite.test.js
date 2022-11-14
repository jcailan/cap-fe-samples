const cds = require("@sap/cds");
const product = require("./suites/ProductService.test");
const project = __dirname + "/..";

describe("Test Suite", function() {
	this.cdstest = cds.test(project);
	describe("ProductService", product.bind(this));
});
const cds = require('@sap/cds');
const util = require("./lib/util");

module.exports = cds.service.impl(async function() {
	const { Products, Reviews } = this.entities;

	this.after('READ', Products, data => {
		if (data.length !== 1) {
			return;
		}

		const product = data[0];
		product.IsReleaseDateEnabled = (product.Price >= 10) ? 3 : 1;
	});

	this.before("UPDATE", Reviews, async request => {
		await util.validate(request);
	});

	this.on("GetData", context => {
		return {
			Id: "1001",
			Actions: [{
				Id: "10",
				Name: "Create Work Order",
				Config: {
					SemanticObject: "WorkOrder",
					Action: "create",
					Parameters: [{
						KeyName: "WorkOrder"
					}]
				}
			}]
		};
	});
});
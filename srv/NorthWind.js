const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
	const { Products } = this.entities;

	this.after('READ', Products, data => {
		if (data.length !== 1) {
			return;
		}

		const product = data[0];
		product.IsReleaseDateEnabled = (product.Price >= 10) ? 3 : 1;
	});
});
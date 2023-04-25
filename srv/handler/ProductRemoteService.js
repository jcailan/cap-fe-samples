module.exports = async service => {
	const external = await cds.connect.to("product_external");
	const { Products } = service.entities;

	service.on("READ", Products, request => {
		return external.run(request.query);
	});

};
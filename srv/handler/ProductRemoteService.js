module.exports = async service => {
	const external = await cds.connect.to("product_external");
	const { Products } = service.entities;

	service.on(["CREATE", "READ", "UPDATE", "DELETE"], Products, async request => {
		try {
			return await external.run(request.query);
		} catch (error) {
			const errors = error.reason.response.body.error.innererror.errordetails;
			errors.forEach(({ code, message, target }) => {
				request.error({ code, message: message.value || message, target });
			});
			return error;
		}
	});

};
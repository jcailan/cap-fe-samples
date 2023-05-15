module.exports = function product() {
	const { GET, POST, expect } = this.cdstest;

	describe("Products Entity, query top 5 records", function() {
		it("+ should return 5 records", async function() {
			const { data } = await GET`/product-remote/Products?$top=5`;
			expect(data.value.length).to.be.equal(5);
		});
	});

	describe("Products Entity, create a new record", function() {
		it("- should return error", async function() {
			try {
				await POST`/product-remote/Products ${{}}`;
				expect.fail("should have return error, but didn't");
			} catch (error) {
				expect(error.isAxiosError).to.be.equal(true);
			}
		});
	});

};
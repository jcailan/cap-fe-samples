module.exports = function product() {
	const { GET, expect } = this.cdstest;

	describe("Products Entity, query top 5 records", function() {
		it("+ should return 5 records", async function() {
			const { data } = await GET`/product/Products?$top=5`;
			expect(data.value.length).to.be.equal(5);
		});
	});
};
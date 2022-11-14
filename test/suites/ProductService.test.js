module.exports = function product() {
	const { GET, expect } = this.cdstest;

	describe("read top 5 records from Products entity set", function() {
		it("should return 5 records", async function() {
			const { data } = await GET`/product/Products?$top=5`;
			expect(data.value.length).to.equal(5);
		});
	});
};
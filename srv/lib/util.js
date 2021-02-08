const i18n = require('@sap/textbundle');

const getAssertUniqueProps = target => {
	const annotationPattern = /@assert.unique./;
	const keys = Object.keys(target);
	return keys.filter(key => annotationPattern.test(key));
};

const getColumns = (columns, element) => {
	const result = [];
	columns.forEach(column => {
		let columnName = column["="];
		if (element[columnName].isAssociation) {
			columnName = columnName + "_Id";
		}
		result.push({ ref: [columnName] });
	});
	return result;
};

const getWhereClause = (columns, element, currentData, newData) => {
	const result = [];
	columns.forEach((column, index) => {
		let columnName = column["="];
		const isAssociation = element[columnName].isAssociation;
		if (isAssociation) {
			columnName = columnName + "_Id";
		}

		if (index > 0) {
			result.push('and');
		}
		result.push({ ref: [columnName] });
		result.push("=");
		if (isAssociation) {
			result.push({ val: currentData[columnName] });
		} else {
			result.push({ val: newData[columnName] });
		}
	});

	return result;
};

const validate = async request => {
	const bundle = new i18n.TextBundle({ path: './_i18n/i18n', locale: request.context.locale });
	const data = request.data;
	const target = request.target;

	const assertUniqueProps = getAssertUniqueProps(target);
	if (!assertUniqueProps) return;
	if (assertUniqueProps.length > 1) {
		request.error({
			code: 500,
			message: "Technical Error: Multiple unique property annotation is not suppoorted",
			severity: "error"
		});
		return;
	}
	const columnName = assertUniqueProps[0].substring(15);

	const keys = Object.keys(target.keys);
	if (keys.length > 1) {
		request.error({
			code: 500,
			message: "Technical Error: Multiple entity keys is not supported",
			severity: "error"
		});
		return;
	}

	const columns = getColumns(target[assertUniqueProps[0]], target.elements);

	let query = {
		SELECT: {
			from: {
				ref: [
					{
						id: target.name,
						where: [
							{ ref: [keys[0]] },
							'=',
							{ val: data[keys[0]] }
						]
					}
				]
			},
			columns: columns
		}
	};

	let result = await request.run(query);

	const whereClause = getWhereClause(target[assertUniqueProps[0]], target.elements, result[0], data);

	query = {
		SELECT: {
			from: {
				ref: [
					{
						id: target.name,
						where: whereClause
					}
				]
			},
			columns: columns
		}
	};

	result = await request.run(query);

	if (result.length) {
		request.error({
			code: 400,
			message: bundle.getText("EntityAlreadyExists", [columnName]),
			target: columnName,
			severity: "error"
		});
	}
};

module.exports = {
	validate
};
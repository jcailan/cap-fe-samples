sap.ui.define([
	"sap/ui/test/OpaBuilder",
	"sap/fe/test/Utils"
], function(OpaBuilder, Utils) {
	"use strict";

	function TemplatePage(vViewId, aAdditionalPageDefinitions) {
		var sViewId = vViewId,
			aAdditionalPages = Array.prototype.slice.call(arguments, 1);

		return Utils.mergeObjects.apply(
			Utils,
			[{
				viewId: sViewId,
				actions: Utils.mergeObjects({}),
				assertions: Utils.mergeObjects({
					iSeeThisPage: function() {
						return OpaBuilder.create(this)
							.hasId(sViewId)
							.do(
								function(oControl) {
									//storing the placeholder object
									this.oPlaceholder = oControl;
								}.bind(this)
							)
							.viewId(null)
							.viewName(null)
							.description(Utils.formatMessage("Seeing the page '{0}'", sViewId))
							.execute();
					}
				})
			}].concat(aAdditionalPages)
		);
	}

	return TemplatePage;
});
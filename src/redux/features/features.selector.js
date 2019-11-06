import { createSelector } from "reselect";

const selectFeature = state => state.additionalFeatures;

export const selectFeatureData = createSelector(
	[selectFeature],
	additionalFeatures => additionalFeatures.additionalFeatures
);

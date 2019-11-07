import { createSelector } from "reselect";

const selectCar = state => state.car;

export const selectCarData = createSelector(
	[selectCar],
	car => car.car
);


const selectFeature = state => state.additionalFeatures;

export const selectFeatureData = createSelector(
	[selectFeature],
	additionalFeatures => additionalFeatures.additionalFeatures
);


const selectPrice = state => state.additionalPrice;

export const selectPriceData = createSelector(
	[selectPrice],
	additionalPrice => additionalPrice.additionalPrice
);

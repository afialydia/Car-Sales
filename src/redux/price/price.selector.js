import { createSelector } from "reselect";

const selectPrice = state => state.additionalPrice;

export const selectPriceData = createSelector(
	[selectPrice],
	additionalPrice => additionalPrice.additionalPrice
);

import { createSelector } from "reselect";

const selectCar = state => state.car;

export const selectCarData = createSelector(
	[selectCar],
	car => car.car
);

export const selectCarFeat = createSelector(
	[selectCar],
	car => car.features
);

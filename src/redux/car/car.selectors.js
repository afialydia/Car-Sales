import { createSelector } from "reselect";

const selectCar = state => state.car;

export const selectCarData = createSelector(
	[selectCar],
	car => car.car
);

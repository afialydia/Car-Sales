import { FeatureActionTypes } from "../features/features.types";
import { addFeatureItem } from "../features/features.utils";

const INITIAL_STATE = {
	car: {
		price: 26395,
		name: "2019 Ford Mustang",
		image:
			"https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
		features: [{ id: 1, name: "V-6 engine", price: 1500 }]
	}

};

const carReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FeatureActionTypes.ADD_FEATURE:
			console.log("i'malsoworking-add")
			return {
				...state,
				features: addFeatureItem(state.features, action.payload)
			};

		case FeatureActionTypes.REMOVE_FEATURE:
			console.log("imworking");
			return {
				...state,
				features: state.car.features.filter(
					feature => feature.id !== action.payload.id
				)
			};
		default:
			return state;
	}
};

export default carReducer;

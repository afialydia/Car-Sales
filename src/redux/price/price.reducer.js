import { FeatureActionTypes } from "../features/features.types";

const INITIAL_STATE = {
	additionalPrice: 0
};

const priceReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FeatureActionTypes.ADD_FEATURE:
			console.log(action.payload.price, "i'-add");
			return {
				...state,
				additionalPrice: state.additionalPrice + action.payload.price
			};
		case FeatureActionTypes.REMOVE_FEATURE:
				return {
					...state,
					additionalPrice: state.additionalPrice - action.payload.price
				};
		default:
			return state;
	}
};

export default priceReducer;

import { FeatureActionTypes } from '../features/features.types'
import {addFeatureItem} from '../features/features.utils'

const INITIAL_STATE = {
	car: {
		price: 26395,
		name: "2019 Ford Mustang",
		image:
			"https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
		features: []
	},
	
};

const carReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FeatureActionTypes.ADD_FEATURE:
			return {
				...state,
				features: addFeatureItem(state.features, action.payload)
            };
            
            case FeatureActionTypes.REMOVE_FEATURE:
			return {
				...state,
				features: state.features.filter(
					feature => feature.id !== action.payload.id
				)
      };
		default:
			return state;
	}
};

export default carReducer;

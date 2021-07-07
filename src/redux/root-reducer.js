import { combineReducers } from "redux";
import carReducer from "./car/car.reducer";
import featureReducer from './features/features.reducer'
import priceReducer from './price/price.reducer'

export default combineReducers({
	car: carReducer,
	additionalFeatures: featureReducer ,
	additionalPrice: priceReducer
});

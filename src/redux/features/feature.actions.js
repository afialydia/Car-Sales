import {FeatureActionTypes} from './features.types';



export const addFeature = feature => ({
  type: FeatureActionTypes.ADD_FEATURE,
  payload: feature
});

export const removeFeature = feature => ({
  type: FeatureActionTypes.REMOVE_FEATURE,
  payload: feature
});


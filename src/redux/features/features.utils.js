export const addFeatureItem = (features, featureToAdd) => {
	console.log(features)
	const existingFeatures = features.find(
	  feature => feature.id === featureToAdd.id
	);
	if (existingFeatures) {
        console.log('hey from utils')
	  return features.map(feature =>
		feature.id === featureToAdd.id
		  ? { ...feature}
		  : feature
	  );
	}
  	console.log(existingFeatures)

	return [...features, { ...featureToAdd}];
  };
  
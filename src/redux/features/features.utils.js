export const addFeatureItem = (features, featureToAdd) => {
	const existingFeatures = features.find(
	  feature => feature.id === featureToAdd.id
	);
  console.log("hey i'm working- add feature")
	if (existingFeatures) {
        console.log('hey from utils')
	  return features.map(feature =>
		feature.id === featureToAdd.id
		  ? { ...feature}
		  : feature
	  );
	}
  
	return [...features, { ...featureToAdd}];
  };
  
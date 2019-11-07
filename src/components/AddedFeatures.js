import React from "react";
import { connect } from "react-redux";

import { selectCarData } from "../redux/car/car.selectors";
import { createStructuredSelector } from "reselect";
import AddedFeature from "./AddedFeature";

const AddedFeatures = ({car}) => {
	console.log('hey from added',car);
	return (
		<div className="content">
			<h6>Added features:</h6>
			{car.features.length ? (
				<ol type="1">
					{car.features.map(feature => (
						<AddedFeature key={feature.id} feature={feature} />
					))}
				</ol>
			) : (
				<p>You can purchase items from the store.</p>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	car: selectCarData,
});

export default connect(mapStateToProps)(AddedFeatures);

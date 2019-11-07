import React from 'react';
import { addFeature } from '../redux/features/feature.actions'
import { connect } from "react-redux";


const AdditionalFeature = props => {
  return (
    <li>
      <button  onClick={()=> addFeature(props)}
         className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapDispatchToProps = dispatch => ({
  addFeature: feature => dispatch(addFeature(feature)),
});

export default connect(
	null,
	mapDispatchToProps
)(AdditionalFeature);

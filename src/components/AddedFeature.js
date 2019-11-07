import React from 'react';
import {connect} from 'react-redux'

import { removeFeature } from '../redux/features/feature.actions'


const AddedFeature = (props) => {
  console.log(props.feature.name)
  return (
    
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> props.removeFeature(props.feature)}>&#10005;</button>
      {props.feature.name} howdy
    </li>
  );
};
const mapDispatchToProps = dispatch => ({
  removeFeature: feature => dispatch(removeFeature(feature))
});

export default connect(
	null,
	mapDispatchToProps
)(AddedFeature);

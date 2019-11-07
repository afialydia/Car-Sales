import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'
import { selectFeatureData } from '../redux/features/features.selector';
import {selectCarData} from '../redux/car/car.selectors'

const AdditionalFeatures = ({additionalFeatures}) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  additionalFeatures: selectFeatureData,
  car: selectCarData
})


export default connect(mapStateToProps)(AdditionalFeatures);

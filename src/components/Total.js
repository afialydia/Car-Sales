import React from 'react';
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'
import { selectPriceData, selectCarData} from '../redux/selectors';


const Total = ({car, additionalPrice}) => {
  console.log(additionalPrice)
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  car: selectCarData,
  additionalPrice: selectPriceData
})


export default connect(mapStateToProps)(Total);

import React from 'react';
import {connect} from 'react-redux'

import {selectCarData} from '../redux/car/car.selectors'
import {createStructuredSelector} from 'reselect'
import { selectPriceData } from '../redux/price/price.selector';


const Total = ({car,additionalPrice}) => {
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

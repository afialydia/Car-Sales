import React from 'react';
import {connect} from 'react-redux'

import {selectCarData} from '../redux/car/car.selectors'
import {createStructuredSelector} from 'reselect'


const Header = ({car}) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  car: selectCarData
})


export default connect(mapStateToProps)(Header);

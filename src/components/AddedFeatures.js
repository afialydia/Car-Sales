// import React from 'react';
// import {connect} from 'react-redux'

// import {selectCarData} from '../redux/car/car.selectors'
// import {createStructuredSelector} from 'reselect'
// import AddedFeature from './AddedFeature';

// const AddedFeatures = ({features}) => {
//   return (
//     <div className="content">
//       <h6>Added features:</h6>
//       {features.length ? (
//         <ol type="1">
//           {features.map(feature => (
//             <AddedFeature key={feature.id} feature={feature} />
//           ))}
//         </ol>
//       ) : (
//         <p>You can purchase items from the store.</p>
//       )}
//     </div>
//   );
// };

// const mapStateToProps = createStructuredSelector({
//   features: selectCarData.features
// })

// export default connect(mapStateToProps)(AddedFeatures);


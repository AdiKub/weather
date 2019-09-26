import React from 'react';
import { connect } from 'react-redux';

import OtherDaysWeathers from '../../components/OtherDaysWeathers';

const OtherDaysWeathersContainer = props => <OtherDaysWeathers {...props} />;

const mapStateToProps = store => ({
  futureWeatherStore: store.futureWeatherStore,
});

export default connect(mapStateToProps, null)(OtherDaysWeathersContainer);
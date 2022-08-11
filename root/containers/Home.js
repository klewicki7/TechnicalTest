import {connect} from 'react-redux';
import actions from '../redux/actions';
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  loadAllWeather: (lat,lon) => dispatch(actions.loadAllWeather(lat,lon)),
  searchCityRequest: (text) => dispatch(actions.searchCityRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

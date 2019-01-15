import { connect } from 'react-redux'
// import * as actions from 'actions/feature.js'
import * as actions from '../modules/counter'
// import * as featureSelector from 'selectors/feature.js'
// import FeatureSchematic from 'pages/content/FeatureSchematic.jsx'
import Weather from './content/Weather'

// const mapStateToProps = (state, ownProps) => {
//     return {

//     }
// }


const mapStateToProps = ({ counter }) => ({
    city1_all: counter.city1,
    city2_all: counter.city2,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing,
})

const mapDispatchToProps = (dispatch) => {
    return {
        insertMe: () => {
            dispatch(actions.insertMe())
        },
        getApiData: () => {
            dispatch(actions.getApiData())
        },
        getZip1Input: (val) => {
            dispatch(actions.getZip1(val))
        },
        getZip2Input: (val) => {
            dispatch(actions.getZip2(val))
        },
    }
}

const WeatherContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Weather)

export default WeatherContainer
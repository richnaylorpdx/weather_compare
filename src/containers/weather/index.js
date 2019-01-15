import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import { Input, InputNumber } from 'antd';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  insertMe,
  getApiData,
  getZip1Input,
} from '../../modules/counter'


class Weather extends React.Component {
    static propTypes = {
        getApiData: PropTypes.func,
        getZip1Input: PropTypes.func,
        insertMe: PropTypes.func,
    }

    constructor() {
        super()
        this.state = {
          currentStep: 1
        }
    }

    render() {

        return (
          <div>
            <h1>Weather</h1>
            <button onClick={() => this.setState({currentStep: 2})}>update step</button>
            {
              this.state.currentStep === 1 ?
                <label>Step 1</label>
                : <label>Step 2</label>

            }
            <label>Enter zip code 1</label>
            <Input
              placeholder='Enter first zip code'
              type={'number'}
              id='zipCode1'
            />
            <button onClick={this.props.getZip1Input}>get input</button>
            <label>Enter zip code 2</label>
            <Input
              placeholder='Enter second zip code'
              type={'number'}
            />
          <button onClick={this.props.insertMe}>Insert Me</button>
          <button onClick={this.props.getApiData}>Api Data</button>
        </div>
      )
    }

}




const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      insertMe,
      getApiData,
      getZip1Input,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)

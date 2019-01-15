import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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


const Home = props => (
  <div>
    <h1>Home</h1>
    <label>Enter zip code 1</label>
    <Input
      placeholder='Enter first zip code'
      type={'number'}
      id='zipCode1'
      onChange={e => state.zip1InputValue = e.target.value}
    />
    <button onClick={() => props.getZip1Input(state.zip1InputValue)}>get input</button>
    <label>Enter zip code 2</label>
    <Input
      placeholder='Enter second zip code'
      type={'number'}
    />
  <button onClick={props.insertMe}>Insert Me</button>
  <button onClick={props.getApiData}>Api Data</button>

    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
)

const state = {
  zip1InputValue: '',
}


const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      insertMe,
      getApiData,
      getZip1Input,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

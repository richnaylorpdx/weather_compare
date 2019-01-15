import React from 'react'
import PropTypes from "prop-types"
import { Input, InputNumber, Button } from 'antd'
import './Weather.css'

export default class Weather extends React.Component {
    static propTypes = {
        getApiData: PropTypes.func,
        getZip1Input: PropTypes.func,
        insertMe: PropTypes.func,
        city1_all: PropTypes.object,
    }

    constructor() {
        super()
        this.state = {
            isStep1: true,
            isStep2: false,
            isReset: false,
            zip1InputValue: '',
            zip2InputValue: '',
        }
    }

    updateZipCode1Status = () => {
        this.setState({ isStep1: false, isStep2: true })
        this.props.getZip1Input(this.state.zip1InputValue)
    }

    updateZipCode2Status = () => {
        this.setState({ isStep2: false })
        this.props.getZip2Input(this.state.zip2InputValue)
    }

    resetInterface = () => {
        this.setState({
            isStep1: true,
            isStep2: false,
            isReset: false,
            zip1InputValue: '',
            zip2InputValue: '',
        })
    }

    render() {

        return (
            <div className='weather-container'>
                {
                    this.state.isStep1 &&
                        <div className='items-row'>
                            <label>Zip code 1: </label>
                                <Input
                                    placeholder='e.g. 97003'
                                    type={'number'}
                                    id='zipCode1'
                                    onChange={e => this.setState({ zip1InputValue: e.target.value })}
                                />
                            <Button
                                onClick={() => this.updateZipCode1Status()}
                                type='primary'
                                icon='search'
                            />
                        </div>
                }
                {
                    this.state.isStep2 &&
                        <React.Fragment>
                            <label>Zip code 2:</label>
                            <Input
                                placeholder='e.g. 97003'
                                type={'number'}
                                id='zipCode2'
                                onChange={e => this.setState({ zip2InputValue: e.target.value })}
                            />
                            <Button
                                onClick={() => this.updateZipCode2Status()}
                                type='primary'
                                icon='search'
                            />
                        </React.Fragment>
                }
                    {
                        this.props.city1_all && this.state.isReset === false &&
                            <div className='weather-results-container'>
                                <label className='items-row'>City: {this.props.city1_all.display_location.full} | Zip Code: {this.state.zip1InputValue} </label>
                                <span className='items-row'>
                                    <label className='weather-label'>Weather: {this.props.city1_all.weather}</label>
                                    <img src={this.props.city1_all.icon_url} />
                                </span>
                                <label>Temp: {this.props.city1_all.temp_f}</label>
                            </div>

                    }
                    <br />
                    {
                        this.props.city2_all && this.state.isReset === false &&
                            <div className='weather-results-container'>
                                <label className='items-row'>City: {this.props.city2_all.display_location.full} | Zip Code: {this.state.zip2InputValue} </label>
                                <span className='items-row'>
                                    <label className='weather-label'>Weather: {this.props.city2_all.weather}</label>
                                    <img src={this.props.city2_all.icon_url} />
                                </span>
                                <label>Temp: {this.props.city2_all.temp_f}</label>
                            </div>

                    }
                    {
                        this.props.city1_all && this.props.city2_all &&
                            <div className='weather-results-container'>
                                <label>
                                    {this.props.city1_all.temp_f - this.props.city2_all.temp_f}
                                    between {this.props.city1_all.display_location.full} & {this.props.city2_all.display_location.full}
                                </label>

                            </div>
                    }

                    {
                        this.state.isStep1 === false && this.state.isStep2 === false &&
                            <Button
                                type='primary'
                                onClick={() => this.resetInterface()}
                            >
                                Reset Interface
                            </Button>
                    }
            </div>
        )
    }

}


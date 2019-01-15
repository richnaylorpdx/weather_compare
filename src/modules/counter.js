export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'
export const SET_ME_IN_STORE = 'counter/SET_ME_IN_STORE'
export const STORE_API_DATA= 'counter/STORE_API_DATA'
export const INSERT_ZIP_1 = 'counter/INSERT_ZIP_1'
export const INSERT_CITY_1 = 'counter/INSERT_CITY_1'
export const INSERT_ZIP_2 = 'counter/INSERT_ZIP_2'
export const INSERT_CITY_2 = 'counter/INSERT_CITY_2'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  rich: 'killer guy'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INSERT_CITY_1:
      return {
        ...state,
        city1: action.weather,
      }
      case INSERT_CITY_2:
      return {
        ...state,
        city2: action.weather,
      }
    case SET_ME_IN_STORE:
      return {
        ...state,
        rich: 'in the store'
      }

    case STORE_API_DATA:
      return {
        ...state,
        action
      }

    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    case INSERT_ZIP_1:
      return {
        ...state,
        zip1: action.zip1
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const insertMe = () => {
  console.log('got to action')
  return dispatch => {
    dispatch({
      type: SET_ME_IN_STORE
    })
  }
}

export const getZip1 = (val) => dispatch => {
  const zipCodeapiUrl = 'http://api.wunderground.com/api/625172310aff38a6/geolookup/q/'  +val + '.json'
  return fetch(zipCodeapiUrl)
    .then(response => response.json())
    .then(json => {
      dispatch(getCity1(json))
      // console.log('get zip 1: ',  json)
    })
}

export const getCity1 = (response) => dispatch => {
  const cityApiUrl = 'http://api.wunderground.com/api/625172310aff38a6/conditions/q/' + response.location.state + '/' + response.location.city + '.json'
  return fetch(cityApiUrl)
    .then(response => response.json())
    .then(json => {
// console.log('get city 1: ', JSON.stringify(json))
      dispatch({
        type: INSERT_CITY_1,
        weather: json.current_observation,
      })
    })
}

export const getZip2 = (val) => dispatch => {
console.log('zip 2 action input val: ', val)
  const zipCodeapiUrl = 'http://api.wunderground.com/api/625172310aff38a6/geolookup/q/'  +val + '.json'
  return fetch(zipCodeapiUrl)
    .then(response => response.json())
    .then(json => {
      dispatch(getCity2(json))
      // console.log('get zip 2: ',  json)
    })
}

export const getCity2 = (response) => dispatch => {
// console.log('get city 2 response: ', response)
  const cityApiUrl = 'http://api.wunderground.com/api/625172310aff38a6/conditions/q/' + response.location.state + '/' + response.location.city + '.json'
  return fetch(cityApiUrl)
    .then(response => response.json())
    .then(json => {
// console.log('get city 2: ', JSON.stringify(json))
      dispatch({
        type: INSERT_CITY_2,
        weather: json.current_observation,
      })
    })
}

// export const updateStore = (response) => dispatch => {
//   console.log('this is data: ', response)

//   const cityApiUrl = 'http://api.wunderground.com/api/625172310aff38a6/conditions/q/' + response.location.state + '/' + response.location.city + '.json'

//   console.log('new cityUrl: ', cityApiUrl)

//   return fetch(cityApiUrl)
//     .then(response => response.json())
//     .then(json => {
//       console.log('this is the converted json: ', json)
//     })
// }



export const getZip1Input = (val) => {
  return dispatch => {
    dispatch({
      type: INSERT_ZIP_1,
      zip1: val
    })
  }
}

export const getApiData = () => dispatch => {
  // const apiUrl = 'http://api.wunderground.com/api/625172310aff38a6/conditions/q/CA/San_Francisco.json'
  const zipCodeapiUrl = 'http://api.wunderground.com/api/625172310aff38a6/geolookup/q/97003.json'
  // const cityApiUrl = 'http://api.wunderground.com/api/625172310aff38a6/conditions/q/'
  // fetch(apiUrl)
  //   .then(response => response.json())
  return fetch(zipCodeapiUrl)
    // .then(response =>
      // dispatch(updateStore(response.json()))
      .then(response => response.json())
      .then(json => {
        // console.log('this is json: ', json.location)
        // console.log('new cityUrl: ', cityApiUrl + json.location.state + '/' + json.location.city + '.json')
        dispatch(updateStore(json))
      })
}

export const updateStore = (response) => dispatch => {
  console.log('this is data: ', response)

  const cityApiUrl = 'http://api.wunderground.com/api/625172310aff38a6/conditions/q/' + response.location.state + '/' + response.location.city + '.json'

  console.log('new cityUrl: ', cityApiUrl)

  return fetch(cityApiUrl)
    .then(response => response.json())
    .then(json => {
      console.log('this is the converted json: ', json)
    })
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}

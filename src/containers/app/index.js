import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
// import Weather from '../weather'
import WeatherContainer from '../WeatherContainer'

const App = () => (
  <div>
    <header>
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/about-us">About</Link> */}
      {/* <Link to="/weather">Weather</Link> */}
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/weather" component={WeatherContainer} />
    </main>
  </div>
)

export default App

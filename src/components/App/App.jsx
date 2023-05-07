// Imports BoilerPlate
import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Imports components
import Page1 from '../Page1/Page1'
// import Page2 from '../Page2/Page2'
// import Page3 from '../Page3/Page3'

function App() {

  // useEffect 
  useEffect(() => {
    // GET Function
    getFeedback()
  }, [])

  // Redux Dispatcher
const dispatch = useDispatch();

const getFeedback = () => {
  axios({
    method: 'GET',
    url: '/feedback'
  }).then(response => {
    dispatch({
      type: 'SET_FEEDBACK',
      payload: response.data
    })
  }).catch(error => {
      console.log('The axios get request to /feedback failed :(')
  })
}


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>

        <Route  exact path='/'> 
          <Page1 />
          <button><Link to="/Page2">NEXT</Link></button>
        </Route>

        <Route  exact path='/'> 
          <Page1 />
          <button><Link to="/Page3">NEXT</Link></button>
        </Route>

        <Route  exact path='/'> 
          <Page1 />
          <button><Link to="/Page4">NEXT</Link></button>
        </Route>

        
      </Router>









    </div>
  );
}

export default App;

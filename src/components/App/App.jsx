// Imports BoilerPlate
import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { Router, Route, Link } from 'react-router-dom';
import {Select} from 'react-select';
// Imports components
// import SecondQuestion from '../SecondQuestion/SecondQuestion'
// import ThirdQuestion from '../ThirdQuestion/ThirdQuestion'


function App() {

  // useEffect 
  useEffect(() => {
    // GET Function
    getFeedback()
  }, [])

  // Redux Dispatcher
  const dispatch = useDispatch();

  //Axios GET
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

  //function to make scroll-down input
  function inputs(event){
    event.preventDefault();
    
    const [val, setVal] = useState("");

  return (
    <div>
      <input
        type="number"
        pattern="[0-9]*"
        value={val}
        onChange={(e) =>
          setVal((v) => (e.target.validity.valid ? e.target.value : v))
        }
      />
      </div>
    );
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      {/* FIRSTQUESTION */}
      <div>
        <h3>How are you feeling today?</h3>
        <h4>Feeling? Select from: 1-5 </h4>
        {inputs}
      </div>

      <button className='nextButon'>Next</button>
  

    </div>
  );
}

export default App;

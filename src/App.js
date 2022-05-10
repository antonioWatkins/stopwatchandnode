import logo from './logo.svg';
import './App.css';
import StopWatch from './Components/StopWatch/StopWatch';
import {useState,useEffect} from 'react'


function App() {

   
    const [intialState, setInitialState] =useState([])

    useEffect(() => {
      fetch('/api/').then(res =>{
        if(res.ok){
          return res.json()
        }
      
    }).then(jsonResponse => setInitialState(jsonResponse))
  }, [])
  
  return (
    <div className='App'>
    <StopWatch />
    </div>
  );
}

export default App;

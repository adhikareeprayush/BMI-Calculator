import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import React, { useState } from 'react';


function App() {

  //making state of our application
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [status, setStatus] = useState('');

  // Logic to calculate BMI
  let calcBmi = (e) => {
    e.preventDefault();
    let h = height / 100;
    let bmi = weight / (h * h);
    setBmi(bmi.toFixed(2));
    if (weight == 0 || height == 0) {
      alert('Please Enter Weight and Height');
    }
    else {
      if (bmi < 18.5) {
        setStatus('Underweight');
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setStatus('Normal Weight');
      } else if (bmi >= 25 && bmi <= 29.9) {
        setStatus('Overweight');
      } else {
        setStatus('Obese');
      }
      //display the result
      document.querySelector('.result').style.display = 'block';
    }
  }




  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className='header'>
          <h2>BMI Calculator</h2>
        </div>
        <form onSubmit={calcBmi}>
          <div className="input-grp">
            <label>Weight (in kg)</label>
            <input type="text" value={weight} placeholder='Enter Weight' onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="input-grp">
            <label>Height (in cm)</label>
            <input type="text" value={height} placeholder='Enter Height' onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className='btn-container'>
            <button type="submit" className="btn btn-primary">Calculate</button>
          </div>
        </form>
        <div className="result">
          <h3>Your BMI: <span>{bmi}</span></h3>
          <h3>Status: <span>{status}</span></h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

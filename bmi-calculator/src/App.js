import './App.css';
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

      <div className='container'>
        <div className='header'>
          <h2>BMI Calculator</h2>
        </div>
        <form onSubmit={calcBmi}>
          <div className='input-grp'>
            <label for='weight'>Weight (kg)</label>
            <input type='text' placeholder='Enter Weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className='input-grp'>
            <label for='height'>Height (cm)</label>
            <input type='text' placeholder='Enter Height' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>

          <div className='btn-container'>
            <button className='btn' type='submit'>Calculate</button>
          </div>

          <div className='result'>
            <h3>BMI: <span>{bmi}</span></h3>
            <h3>Status: <span>{status}</span></h3>
          </div>

        </form>
      </div>

      <div className='footer'>
        <p>React Practice Project #1 | BMI Calculator</p>
      </div>

    </div>
  );
}

export default App;

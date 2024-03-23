import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';


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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

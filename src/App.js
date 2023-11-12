import Logo from './images/logo.png';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearBtn from './components/ClearBtn';
import { useState } from 'react';
import { evaluate } from 'mathjs';



function App() {

  const [input, setInput] = useState('');

  const limitLength = (result) => {
    // define maximum length and max decimal
    const maxLength = 16;
    const maxDecimal = 2;

    // if the result is less than 16, the following applies .toLocaleString()
    const resultString = result.toLocaleString();

    // checks if the length is greater than 16, if yes, enter the conditional

    if (resultString.length > maxLength) {

      //convert result to float number (affects even if it has no decimals) and tofixed to apply max 2dec

      const roundedResult = parseFloat(result).toFixed(maxDecimal);
      // with toLocal i dot the numbers and with substring apply maxlength
      return roundedResult.toLocaleString().substring(0, maxLength);


    }

    return resultString;
  };

  const addInput = (value) => {



    // I create a constant that tests if the last character is an operator using $ (end of string) and test(value) that test evaluates if true
    const lastCharIsOperator = /[+\-*/]$/.test(input);


    // if lastCharIsOperator it is an operator and the new value entered is an operator (value)
    if (lastCharIsOperator && /[+\-*/]/.test(value)) {

      // removes the last position and adds value
      const newValue = input.slice(0, -1) + value
      setInput(newValue);
    } else {
      const newValue = input + value;
      setInput(newValue);
    }


  };




  const result = () => {

    if (/[+\-*/]$/.test(input)) {
      // last character is a operator show message
      alert('Introduce valores validos ejemplo 2+2. Después de aceptar pulsa CLEAR. Gracias');
      setInput('Error');
    } else {
      const resultValue = evaluate(input);

      if (!isNaN(resultValue) && isFinite(resultValue)) {
        //isFinite evaluates if the number is finite, if so, formats and updates input
        const formattedResult = limitLength(resultValue);
        setInput(formattedResult);
      } else {

        setInput('Error');
      }
    }
  };


  return (
    <div className='App'>
      <div className='container-logo'>
        <a href="https://www.linkedin.com/in/raquel-pe-go/" target='_blank'
          rel='noreferrer'>
          <img className='raquel-logo'
            src={Logo}
            alt='Logo de Raquel' />
        </a>

      </div>
      <div className="container-calculator">
        <Screen input={input} />
        <div className="row">
          <Button handleInput={addInput}>1</Button>
          <Button handleInput={addInput}>2</Button>
          <Button handleInput={addInput}>3</Button>
          <Button handleInput={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleInput={addInput}>4</Button>
          <Button handleInput={addInput}>5</Button>
          <Button handleInput={addInput}>6</Button>
          <Button handleInput={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleInput={addInput}>7</Button>
          <Button handleInput={addInput}>8</Button>
          <Button handleInput={addInput}>9</Button>
          <Button handleInput={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleInput={result}>=</Button>
          <Button handleInput={addInput}>0</Button>
          <Button handleInput={addInput}>.</Button>
          <Button handleInput={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearBtn handleClear={() => setInput('')} >
            Clear
          </ClearBtn>
        </div>
      </div>
    </div >
  );
}

export default App;

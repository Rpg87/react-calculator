import Logo from './images/logo.png';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearBtn from './components/ClearBtn';
import { useState } from 'react';
import { evaluate } from 'mathjs'



function App() {

  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  }

  const result = () => {
    setInput(evaluate(input))
  }



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
          <Button handleInput={addInput}> 1 </Button>
          <Button handleInput={addInput}> 2 </Button>
          <Button handleInput={addInput}> 3 </Button>
          <Button handleInput={addInput}> + </Button>
        </div>
        <div className="row">
          <Button handleInput={addInput}> 4 </Button>
          <Button handleInput={addInput}> 5 </Button>
          <Button handleInput={addInput}> 6 </Button>
          <Button handleInput={addInput}> - </Button>
        </div>
        <div className="row">
          <Button handleInput={addInput}> 7 </Button>
          <Button handleInput={addInput}> 8 </Button>
          <Button handleInput={addInput}> 9 </Button>
          <Button handleInput={addInput}> * </Button>
        </div>
        <div className="row">
          <Button handleInput={result}> = </Button>
          <Button handleInput={addInput}> 0 </Button>
          <Button handleInput={addInput}> . </Button>
          <Button handleInput={addInput}> / </Button>
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

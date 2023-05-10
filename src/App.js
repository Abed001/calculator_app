import logo from './logo.svg';
import './App.css';
import Button from "./Component/Button"
import Input from "./Component/Input"
import { useState } from 'react';
import * as math from 'mathjs';


function App() {
  const buttonColor="#FFA500"
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addText = (val) => {
    setText((text) => [...text, val + ""])

  }
const Clear=()=>{
  setText("")
  setResult("")

}
const calculateResult=()=>{
const input=text.join("");//remove commas
setResult(math.evaluate(input))

}

  
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />

        <div className='container'>
          <Button symbol='7' handleClick={addText} />
          <Button symbol='8' handleClick={addText} />
          <Button symbol='9' handleClick={addText} />
          <Button symbol='/' handleClick={addText} color={buttonColor}/>
        </div>

        <div className='container'>
          <Button symbol='4' handleClick={addText} />
          <Button symbol='5' handleClick={addText} />
          <Button symbol='6' handleClick={addText} />
          <Button symbol='*' handleClick={addText} color={buttonColor} />
        </div>

        <div className='container'>
          <Button symbol='1' handleClick={addText} />
          <Button symbol='2' handleClick={addText} />
          <Button symbol='3' handleClick={addText} />
          <Button symbol='+' handleClick={addText} color={buttonColor} />
        </div>

        <div className='container'>
          <Button symbol='0' handleClick={addText} />
          <Button symbol='.' handleClick={addText} />
          <Button symbol='=' handleClick={calculateResult} color={buttonColor} />
          <Button symbol='-' handleClick={addText} color={buttonColor}/>
        </div>
        <Button symbol='Clear' handleClick={Clear} color='red' />
      </div>

    </div>
  );
}

export default App;

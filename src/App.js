import Input from './components/Input';
import Button from './components/Button';


import { Container, Content, Row, Column } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');

  const handleAdNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}` )
  };

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  };

  const handleSumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
    } else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
            <Button label="C" onClick={handleOnClear}/>
            <Button label="⌫" onClick={()=>handleAdNumber('')}/>
            <Button label="%" onClick={()=>handleAdNumber('%')}/>
            <Button label="÷" onClick={()=>handleAdNumber('/')}/>
          </Row>
          <Row>
            <Button label="7" onClick={()=>handleAdNumber('7')}/>
            <Button label="8" onClick={()=>handleAdNumber('8')}/>
            <Button label="9" onClick={()=>handleAdNumber('9')}/>
            <Button label="x" onClick={()=>handleAdNumber('*')}/>
          </Row>
          <Row>
            <Button label="4" onClick={()=>handleAdNumber('4')}/>
            <Button label="5" onClick={()=>handleAdNumber('5')}/>
            <Button label="6" onClick={()=>handleAdNumber('6')}/>
            <Button label="-" onClick={()=>handleAdNumber('-')}/>
          </Row>
          <Row>
            <Button label="1" onClick={()=>handleAdNumber('1')}/>
            <Button label="2" onClick={()=>handleAdNumber('2')}/>
            <Button label="3" onClick={()=>handleAdNumber('3')}/>
            <Button label="+" onClick={handleSumNumber}/>
          </Row>
          <Row>
            <Button label="e" onClick={()=>handleAdNumber('e')}/>
            <Button label="0" onClick={()=>handleAdNumber('0')}/>
            <Button label="," onClick={()=>handleAdNumber(',')}/>
            <Button label="=" onClick={()=>handleAdNumber('=')}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;

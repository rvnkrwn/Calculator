import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
let backSpace = '<-';

function App() {
useEffect(()  => {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('button'));

    buttons.map(buttons =>  {
    buttons.addEventListener('click', (e) =>  {
      switch(e.target.innerText){
        case 'C':
          display.value = '';
          break;
        case '<-':
          if(display.value){
            display.value = display.value.slice(0, -1);
          }
          break;
        case '=':
          display.value = eval(display.value);
          break;
        default:
          display.value += buttons.innerText;
          console.log( buttons.innerText);
      }
    });
  });
},[]);
  return (
    <ChakraProvider theme={theme}>
    <Box height={'100vh'} width={'100vw'} overflow={'hidden'}>
      <Container>
        <Box display={'flex'} justifyContent={'space-between'} padding={2}>
          <Text alignSelf={'center'}>Calculator</Text>
          <ColorModeSwitcher alignSelf={'center'} />
        </Box>
        <Box padding={4} borderRadius={'10px'} style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', minWidth: '280px', minHeight: 'fit-content', boxShadow: '0 0 10px black'}}>
          <Box padding={2} margin={2} border={'1px solid'} borderRadius={'10px'}>
            <input id="display" style={{background: 'transparent', outline: 'none', textAlign: 'right', width: '100%' }} />
          </Box>
          <Grid templateColumns='repeat(4, 1.5fr)' gap={5}>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>C</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>/</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>/100</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>{backSpace}</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>7</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>8</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>9</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>*</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>4</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>5</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>6</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>-</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>1</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>2</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>3</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>+</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>00</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>0</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' }}>.</button>
            <button className={'button'} style={{ height: 45, width: 45, borderRadius: '10px' , background: 'blue', color: 'white'}}>=</button>
          </Grid>
        </Box>
      </Container>
    </Box>
  </ChakraProvider>
  );
}

export default App;

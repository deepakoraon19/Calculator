import React,{useState} from 'react'
import './App.css';
import Nums from './components/Nums'
import Total from './components/Total'
function App() {
  
  const[str,setStr]=useState("")

  let trial = (e)=>{
    setStr(str+e.target.innerHTML)
    console.log(str+e.target.innerHTML)
  }
  let equate = ()=>{
    setStr(eval(str))
  }
  
  return (<>
    <Total data={str}></Total> 
    <div className='numpad'>
    <Nums click={trial} symbol='1'></Nums>
    <Nums click={trial} symbol='2'></Nums>
    <Nums click={trial} symbol='3'></Nums>
    <Nums click={trial} symbol='+'></Nums>
    <Nums click={trial} symbol='4'></Nums>
    <Nums click={trial} symbol='5'></Nums>
    <Nums click={trial} symbol='6'></Nums>
    <Nums click={trial} symbol='-'></Nums>
    <Nums click={trial} symbol='7'></Nums>
    <Nums click={trial} symbol='8'></Nums>
    <Nums click={trial} symbol='9'></Nums>
    <Nums click={trial} symbol='*'></Nums>
    <Nums click={trial} symbol='0'></Nums>
    <Nums click={trial} symbol='/'></Nums>
    <Nums click={()=>{setStr("")}} symbol='AC'></Nums>
    <Nums click={equate} symbol='='></Nums>
    </div>   
    
    </>
    
    );
  }
  
  export default App;
  
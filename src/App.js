//import logo from './logo.svg';
import './App.css';
import React, { useMemo, useState } from 'react';


const HugeList = React.memo(({arrayOfItems,itemStyle}) => {
  console.log("rendered")
  const itemsJxs = arrayOfItems.map((value,idx)=> <li key={idx} style = {itemStyle}>This is item {value}</li>)
  return <ul>{itemsJxs}</ul>
})

HugeList.whyDidYouRender = true

function App() {
  //const [arrayOfItems,setArrayOfItems] = useState([...Array(5000).keys()])
  const [items,setItems] = useState([...Array(10).keys()])
  const [inputBox, setInputBox] = useState("")

  //const itemStyle = useMemo(() => ({textAlign: "left"}) , [])
  const itemStyle = {textAlign: "left"}

  const handleSubmit = (e) => {
    e.preventDefault()
    setItems([...items , inputBox])
    setInputBox("")
  }
  return (
    <div className="App">
      <form onSubmit = {(e) => handleSubmit(e)}> 
        <input type = "text" value={inputBox} onChange = {(e) => setInputBox(e.target.value)}/>
        <button> Add Item </button>
      </form>
      <HugeList arrayOfItems = {items} itemStyle = {itemStyle}/>
    </div>
  );
}

export default App;

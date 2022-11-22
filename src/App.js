// import logo from './logo.svg';
import React from 'react';
import './App.css';



class Field extends React.Component {
  render() {
    const styleFields = {
      width: '200px',
      height: '25px',
      bordercolor: 'black 10px solid'
    }
    return <div>
      <input style={styleFields} placeholder="do it" type="text" /><Btn/>
      <br /> 
      <input style={styleFields} placeholder="do it" type="text" /><Btn/>
      <br />
      <input style={styleFields} placeholder="do it" type="text" /><Btn/>
      <br />
      <input style={styleFields} placeholder="do it" type="text" /><Btn/>
      <br />
      <input style={styleFields} placeholder="do it" type="text" /><Btn/>
    </div>
  }
}

class Btn extends React.Component {
  render() {
    const styleBtn = {
      width: '90px',
      height: '25px',
      bordercolor: 'black 10px solid',
  
    }
    return <button style={styleBtn}>Done</button>
  }
}



function App() {
  return (
    <div className="App">
      <Header />
      <Field/>
    </div>
  );
}

export default App;

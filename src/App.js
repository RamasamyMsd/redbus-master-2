import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import './nav.css';
import Container from './Container';
import TextBox from './TextBox';
import './Form.css';
import './Book.js';
import { BrowerRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function App() {
  let historynext = useNavigate()

  return (
    <>
      <NavBar />
      <Container historynext={historynext} />
    </>
  )
}

export default App;

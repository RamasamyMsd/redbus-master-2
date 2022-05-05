import React from 'react'
import App from './App';
import HelloPage from './HelloPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/'
          element={<App />}
        />
        <Route exact path="/HelloPage"
          element={<HelloPage />}
        />
         <Route exact path='/App'
          element={<App />}
        />
      </Routes>
    </Router>
  )
}

export default Main
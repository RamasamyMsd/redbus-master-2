import React from 'react'
import './nav.css'

function NavBar(props) {
  return (
    <>
      <header>
        <a href="#" className="logo"><span>Red</span>Bus</a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#About">About</a>
          <a href="#BusTickets">Bus Tickets</a>
          <a href="#Help">Help</a>

        </nav>


      </header>





    </>
  )
}

export default NavBar
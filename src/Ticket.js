import React, { Component } from 'react';
import './ticket.css';
class Ticket extends Component {
    constructor() {
        super();
        console.log();
        this.state={

        };

    }
    componentDidMount = () => {
        console.log('Mounting Ticket.js');
        console.log(this.props)
    }
  render() {
      const {from,to,date,} =this.props.stateValue.Sitebook.TravelInformation;
    return (
     <>
     <div className='Container-Ticket'>
     <h3>Welcome to {this.props.travelsName}</h3>
    <form className='Tic1'>
    <div>
    
     <label> <p> From:{from}</p></label>
     <label> <p> To:{to}</p></label>
     <label>  <p>Date:{date}</p> </label>
     <label>  <p> SeatNo:{this.props.seatlist} </p> </label>
     <label>  <p>Price:{this.props.Ticketprice}</p></label>  
    </div>
     <div>
        <label> <p>Name:{this.props.name}</p></label>  
        <label><p>Age:{this.props.Age}</p></label>
        <label><p>Gender:{this.props.Gender}</p></label>
     </div>
     </form>
     <div>
         <p> Your Ticket Is Confirmed</p>
     </div>
   
     </div>
    
     </>
    )
  }
}

export default Ticket;
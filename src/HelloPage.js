import React from 'react'
import NavBar from './NavBar';
import './nav.css';
import './SideBar.css';
import Book from './Book.js'
import { BusDetails } from './BusList';
import { connect } from 'react-redux';
class HelloPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            busDetail: BusDetails
        };
    }
    getBusTypeId=(e)=> {
        console.log(e.target.id)
        console.log( BusDetails.filter(el => {
            return el.type === e.target.id;
        }))
        this.setState(
            {
                busDetail: BusDetails.filter(el => {
                    return el.type === e.target.id;
                })
            }
        )
    }
   
    render() {
        console.log(this.props);
       
        return (
            <>
                <NavBar />
                <div className='main'>
                <div className="sidebar">
                    <ul className="nav">
                        <h2>Filters</h2>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-bus"></i>Live Tracking Details
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-calendar-xmark"></i>Resechudules(21)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-bus-simple"></i>PrimoBus(41)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-chalkboard"></i>Track Bus
                            </a>
                        </li>
                        <h2>Departure Time</h2>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-sunrise"></i>Before 6am
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-clock-six"></i>6am to 12pm(10)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-clock-twelve"></i>12pm to 6pm(1)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-clock-six"></i> After 6pm(1)
                            </a>
                        </li>
                        <h2>Bus Types <span> <a href="#" id='ac' onClick={this.getBusTypeId}>
                                AC(10)
                            </a></span></h2>
                        <li>
                            <a href="#" id='seater' onClick={this.getBusTypeId}>
                                <i className="fa-solid fa-person-seat"></i> Seater(10)
                            </a>
                        </li>
                        <li>
                            <a href="#" id='sleeper' onClick={this.getBusTypeId}>
                                Sleeper(20)
                            </a>
                        </li>
                        <li>
                            <a href="#" id='ac' onClick={this.getBusTypeId}>
                                AC(10)
                            </a>
                        </li>
                        <li>
                            <a href="#" id='nonAc' onClick={this.getBusTypeId}>
                                NONAC(10)
                            </a>
                        </li>
                        <h2>Arrival Time</h2>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-sunrise"></i>Before 6am
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                6am to 12pm(10)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                12pm to 6pm(1)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                After 6pm(1)
                            </a>
                        </li>
                        <h2>AMENITIES</h2>
                        <li>
                            <a href="#">
                                <span className="material-icons">
                                    wifi
                                </span> wifi(5)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-bottle-water"></i>water bottle(5)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-cc-discover"></i>movies(5)
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-cc-discover"></i>movies(5)
                            </a>
                        </li>
                    </ul>

                </div>
                <Book  busDetail={this.state.busDetail} {...this.props} />
                </div>
            </>
        )
    }

}
function mapStateToProps(state) {
    console.log(state)
    return{
    stateValue:state,
    }
    
  }
  
export default connect(mapStateToProps, null)(HelloPage);


// export default HelloPage;
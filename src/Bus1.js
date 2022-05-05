import React from 'react'
import './Bus.css'
import Seats from './Seats';
import { connect } from 'react-redux';

class Bus1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            showModal: false
        }
    }
    componentDidMount() {
        console.log('BOOk', this.props.stateValue.Sitebook.TravelInformation);
    }
    handleClick() {
        this.setState({ show: !this.state.show })
    }

    handleClick2() {
        this.setState({ show: !this.state.show })
    }
    render() {
        const { from, to,date } = this.props.stateValue.Sitebook.TravelInformation
        return (

            <>
                    <div className='Container1'>
                    <h3>{this.props.travelsName}  <p> Boarding At: {from}</p> </h3>
                    <div className='Dis'>
                        <h3> <p>Destination: {to}</p></h3>
                    </div>
                    <div className='Dis1'>
                    <h3>Date :{date}</h3>
                    </div>
                    <button className='Btn' onClick={() => this.handleClick()}>View Seats</button>
                    </div>
                    <div className='Dis2'>
                       <div className='DisValueleft' >Why RedBus</div>
                       <div className='DisValue'>Amenities</div>
                       <div className='DisValue'>Bus Photos</div>
                       <div className='DisValue'>Boarding & Dropping Points</div>
                       <div className='DisValue'>Reviews</div>
                       <div className='DisValue'>Booking policies</div>
                       <div className='DisValue'>Rest Stops</div>
                     </div> 
                {!this.state.show && <Seats {...this.props} handleClick2={() => this.handleClick2()} />}
            </>
        );
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        stateValue: state,
    }

}

export default connect(mapStateToProps, null)(Bus1);


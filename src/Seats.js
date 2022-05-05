import React from 'react';
import './Seat.css';
import { CloseOutlined, } from '@ant-design/icons';
import { BusDetails } from './BusList';
import Form1 from './Form';
class Seats extends React.Component {
  constructor() {
    super()
    this.state = {
      seatbookno: [],
      clicked: false,
      alreadyExist: false,
      show: true,
      seatlist: [],
      seatselected: [],
      Ticketprice:'',
      buyTicket: false,

    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  fn(a) {
    const b = BusDetails.find(a => a.name === this.props.travelsName);
    // let seatsNo = a;

    let bar = b.seatNo;
    console.log(bar.includes(a));
    //let v = b.seatsNo.includes(a);
    //console.log(b.seatsNo.includes(a));
    // console.log(v);
    console.log(this.state.alreadyExist);
    if (bar.includes(a)) {
      let index = bar.indexOf(a);
      this.setState({ alreadyExist: false });
      console.log(index);
      // delete bar[index];
      let fb = bar.filter((bar, index) => bar !== a);
      this.setState({ seatlist: fb })
      b.seatNo = fb;
      console.log('Seat', b.seatNo);
      this.setState({ seatselected: b.seatNo });


    }
    console.log(this.state.alreadyExist);
    if (!this.state.alreadyExist && (!bar.includes(a) || bar === [])) {
      b.seatNo.push(a);
      //this.setState({alreadyExist:true});
    }
    //  if(bar.includes(a)){
    //    let index = bar.indexOf(a);
    //    console.log(index);
    //  }
    console.log(b);
    this.setState({ seatbookno: a });
    this.setState({ clicked: !this.state.clicked });
    // a.preventdefault()
  }

  handleClick(e) {
    console.log(e);
    console.log('clicked');
    this.setState({ buyTicket: true, Ticketprice:(this.state.seatselected.length *800) });
    // return (
    //   <Form1 />
    // )
    // this.props.historynext('/Form1');

  }
  render() {
    console.log(BusDetails);
    console.log(this.props.travelsName);
    const { seatselected } = this.state;
    console.log('State', seatselected)
    console.log(seatselected.length * 800);
    // console.log(this.props);
    // console.log(this.state);
    return (
      <>
        <div className='bus-container'>
          <ul className="showcase">
            <li>
              <div className="seat"></div>
              <small>Available</small>
            </li>
            <li>
              <div className="seat"></div>
              <small>Selected</small>
            </li>
            <li>
              <div className="seat occupied"></div>
              <small>Occupied</small>
            </li>
            <li>
              <div className='Close'>
                <CloseOutlined style={{ color: "red", Fontsize: "100" }} onClick={this.props.handleClick2} />
              </div>
            </li>
          </ul>

          <div className="container">
            <div>
              <div className="Front"></div>
              <div className="row">
                <div className="seat" onClick={() => this.fn('A1')}>A1</div>
                <div className="seat" onClick={() => this.fn('A2')} >A2</div>

                <div className="seat" onClick={() => this.fn('A3')}>A3</div>
                <div className="seat" onClick={() => this.fn('A4')}>A4</div>
              </div>

              <div className="row">
                <div className="seat" onClick={() => this.fn('B1')}>B1</div>
                <div className="seat" onClick={() => this.fn('B2')}>B2</div>

                <div className="seat" onClick={() => this.fn('B3')}>B3</div>
                <div className="seat" onClick={() => this.fn('B4')}>B4</div>
              </div>
              <div className="row">
                <div className="seat" onClick={() => this.fn('C1')}>C1</div>
                <div className="seat" onClick={() => this.fn('C2')}>C2</div>

                <div className="seat" onClick={() => this.fn('C3')}>C3</div>
                <div className="seat" onClick={() => this.fn('C4')}>C4</div>
              </div>
              <div className="row">
                <div className="seat" onClick={() => this.fn('D1')}>D1</div>
                <div className="seat" onClick={() => this.fn('D2')}>D2</div>

                <div className="seat" onClick={() => this.fn('D3')}>D3</div>
                <div className="seat" onClick={() => this.fn('D4')}>D4</div>
              </div>
              <div className="row">
                <div className="seat" onClick={() => this.fn('E1')}>E1</div>
                <div className="seat" onClick={() => this.fn('E2')}>E2</div>


                <div className="seat" onClick={() => this.fn('E3')}>E3</div>
                <div className="seat" onClick={() => this.fn('E4')}>E4</div>
              </div>
            </div>
            <div className='tic'>
              <div className="text">
                <div>
                  <p> You have selected:
                    {this.state.seatlist.map((a) => <span>{a}</span>)}</p>

                  <p>Ticket Price:
                    {seatselected.length * 800}</p>
                </div>

              </div>


            </div>


            {/* <div classNames="Bottom"><p >Left</p>&nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;<p>Right</p></div> */}
          </div>
          {/* <span>Selected Seat</span>
          <h5 id="test"></h5> */}
          {/* <button className='Buy' style={{cursor:'pointer'}} onClick={(e) => this.handleClick(e)}>Buy tickets</button>*/}

          <button className='Buy' onClick={(e) => { this.handleClick(e) }}>Buy Tickets</button>
          {this.state.buyTicket && <Form1 {...this.props} {...this.state}/>}

        </div>
      </>
    );
  }
}
export default Seats;
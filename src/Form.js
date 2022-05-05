import React, { Component } from 'react';
import './Form.css';
import Ticket from './Ticket';
export class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            Age:'',
            Gender:'',
            check:false,
            Ticform:false
        };

    }
    onTextChanged = (e) =>{
      this.setState({name:e.target.value})
    }
    onAgeChanged = (e) =>{
       this.setState({Age:e.target.value})
    }
    onGChanged = (e) =>{
       this.setState({Gender:e.target.value})
    }
    submit(e){
        console.log(e);
        // const{name,Age}=this.state;
        console.log(this.state);
       this.setState({check:true});
       this.setState({Ticform:true});
    }
    render() {
        // console.log(this.state);
        return (
            <>
                <div className='container-Tic'>
                    <div className='User-Container'>
                    <form className='Tic'>
                        <div>
                            <label>Enter Your Name:</label>
                            <input onChange={this.onTextChanged} className='input' type="text"  />
                        </div>
                        <div>
                            <label >Enter Your Age:</label>
                            <input onChange={this.onAgeChanged} className='input' type="number" />
                        </div>
                        <div>
                            <label >Your Gender:</label>
                            <input onChange={this.onGChanged} className='input' type="text" />
                        </div>
                    </form>
                     <button  id='btn4' onClick={(e) => this.submit(e)}>Get Ticket</button>
                     {this.state.Ticform && <Ticket {...this.state} {...this.props} />}
                     </div>
                </div>
            </>
        )
    }
}

export default Form;
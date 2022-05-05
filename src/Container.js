import React from "react";
import { connect } from 'react-redux';
import HelloPage from "./HelloPage";
var curr = new Date();
curr.setDate(curr.getDate());
var date1 = curr.toISOString().substr(0, 10);
class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            'chennai',
            'tirunelveli',
            'madurai',
            'trichy',
            'bangalore',
            'chengalpattu',
            'tiruvanamalai',
            'virudhunagar',
            'Nagercoil',
            'Tiruvanthapuram',
            'Hyderabad',
            'vellore',
            'Erode',
        ];
        this.state = {
            from: [],
            text: '',
            to: [],
            texto: '',
            // busdate:date1,
            textd: ''
        };
    }
    onTextChanged = (e) => {
        const value = e.target.value;
        let from = [];
        if (value.length > 0) {
            const regex = new RegExp(`${value}`, 'i');
            from = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ from, test: value }));
    }
    onTextChangedj = (e) => {
        const value = e.target.value;
        let to = [];
        if (value.length > 0) {
            const regex = new RegExp(`${value}`, 'i');
            to = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ to, texto: value }));
    }

    ondateChanged = (e) => {
        this.setState({ textd: e.target.value })
    }
    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            from: [],
        }))
    }

    suggestionSelected2(value) {
        this.setState(() => ({
            texto: value,
            to: [],
        }))
    }
    renderSuggestion() {
        const { from } = this.state;
        if (from.length === 0) {
            return null;
        }
        return (
            <ul>
                {from.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }
    renderSuggestion2() {
        const { to } = this.state;
        if (to.length === 0) {
            return null;
        }
        return (
            <ul>
                {to.map((item) => <li onClick={() => this.suggestionSelected2(item)}>{item}</li>)}
            </ul>
        )
    }
    submit = (e) => {
        const { text, texto, textd } = this.state;
        console.log("date", textd);
        if (text !== texto && textd != '' ) {
            this.props.getTravel(text, texto, textd);
        }
        else {
            e.preventdefault();
        }

        console.log('hello', this.props);
        this.props.historynext('/HelloPage');
        console.log(this.props);
        <HelloPage {...this.props} />
    }
    componentDidUpdate() {
        const { text, texto, textd } = this.state;
        console.log('From', text);
        console.log('To', texto);

    }
    render() {
        const { text } = this.state;
        const { texto } = this.state;
        const { date } = this.state;
        const { historynext } = this.props
        console.log(this.props.stateValue);
        console.log(this.props)
        // var curr = new Date();
        // curr.setDate(curr.getDate());
        // var date1 = curr.toISOString().substr(0, 10);
        return (
            <>
                <div className='container'>
                    <div className="User-Input-Container">
                        <form >
                            <label >Travel Details:</label>
                            <div>
                                <label >From:</label>
                                <input value={text} onChange={this.onTextChanged} type="text" />
                                {this.renderSuggestion()}
                                <label >To:</label>
                                <input value={texto} onChange={this.onTextChangedj} type="text" />
                                {this.renderSuggestion2()}
                                <label >Date:</label>
                                <input type="date" name="dateRequired" value={this.state.textd} onChange={this.ondateChanged} />
                                {console.log(date1)}
                            </div>
                            <button onClick={this.submit} id='btn1'>Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        stateValue: state,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getTravel: (datafrom, datato, dataDate) => { dispatch({ type: "SET_TRAVEL", datastart: datafrom, dataend: datato, travelDate: dataDate }) },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteText);

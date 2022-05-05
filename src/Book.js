import React from 'react'
import { articletext } from './container.constants';
import Bus1 from './Bus1';
import './Book.css';
class Book extends React.Component {
    constructor(props) {
        super()
        this.state = {
            Greetings: 'Hello'
        }
    }
    componentDidMount() {

        // this.setState({ Greetings: 'Welcome' })
    }
    render() {
        const { busDetail } = this.props;
        console.log(this.props);
        return (
            <>
                <div className='header1'><h3>{articletext}</h3></div>
                <h1>{this.state.Greetings}</h1>
                {busDetail.map((elements) => (
                    <Bus1 travelsName={elements.name} {...this.props} />
                ))}

            </>
        );
    }
}

export default Book;
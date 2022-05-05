import React from "react";
export default class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.items = [
            'chennai',
            'tirunelveli',
            'tirichy',
            'chengalpat',
            'tirupathi',

        ];
    }
    render() {
        return (
            <div className="">
                <input onChange={(e) => console.log(e.target.value)} type='text' />
                <ul>
                    {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )
    }
}
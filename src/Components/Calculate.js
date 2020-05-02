import React from 'react';
import axios from 'axios';

import './Calculate.css';

export default class Calculate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: null,
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const number = null;
        this.setState({ number });
    }

    getFibonacciNumber(n) {
        axios.get(`https://fibonacci-node-app.herokuapp.com/fib?n=${n}`)
            .then(res => {
                const number = res.data;
                this.setState({ number });
            });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.getFibonacciNumber(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                What Fibonacci number do you want to calculate?
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter a number"
                        value={this.state.value}
                        onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Calculate" />
                </form>
                <p className="Answer" >{ this.state.number }</p>
            </div>
        )
    }
}
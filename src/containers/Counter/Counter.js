import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        console.log(this.state.counter);
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIcrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddValueCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractValueCounter} />
                <hr />
                <button>Store Result</button>
                <ul>
                    <li></li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        ctr: state.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIcrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
        onAddValueCounter: () => dispatch({ type: "ADD", value: 5 }),
        onSubstractValueCounter: () => dispatch({ type: "SUBSTRACT", value: 5 }),
        onSubstractValueCounter: () => dispatch({ type: "SUBSTRACT", value: 5 }),
        onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
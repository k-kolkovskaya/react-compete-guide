import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIcrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddValueCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractValueCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li onClick={() => this.props.onDeleteResult(result.id)} key={result.id}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterReducer.counter,
        storedResults: state.resultReducer.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIcrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddValueCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        onSubstractValueCounter: () => dispatch({ type: actionTypes.SUBSTRACT, value: 5 }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultId: id }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
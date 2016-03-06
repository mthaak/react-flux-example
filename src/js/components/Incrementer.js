var React = require('react');
var Dispatcher = require('./../Dispatcher');
var Store = require('./../stores/Store');

class Incrementer extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
    }

    componentDidMount() {
        Store.bind(this, 'incremented');
    }

    componentWillUnmount() {
        Store.unbind(this, 'incremented');
    }

    incremented() {
        this.setState({
            value: Store.getValue()
        })
    }

    handleClick() {
        Dispatcher.dispatch({
            eventName: 'increment'
        });
    }

    render() {
        var value = this.state.value ? this.state.value : 0;
        return <div>
            <p>{value}</p>
            <button onClick={this.handleClick}>Increment</button>
        </div>;
    }
}

module.exports = Incrementer;
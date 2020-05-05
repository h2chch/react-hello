import React from "react";

class Counter extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            counter: 1
        }
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div>
                {this.state.counter}
            </div>
        )
    }
}

export default Counter
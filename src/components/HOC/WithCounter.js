// HOC for counter components
import React from 'react';

const WithCounterHoc = CounterComponent => {
    class WithCounter extends React.Component{
        state={
            count: 0
        }
        incrementCounter = () => {
            this.setState({count: this.state.count + 1})
        }
        render(){
            return(
                <CounterComponent incrementCounter={this.incrementCounter} count={this.state.count} />
            )
        }
    }
    return WithCounter;
}
export default WithCounterHoc;
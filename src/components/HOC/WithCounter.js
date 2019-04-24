// HOC for counter components
// This also covers passing parameters to the HOC

// 'WrappedComponent' is the original component
// 'incrementCount' is the parameter passed. Here it specifies to increment value by how much.
// 'name' props is passed from App.js
import React from 'react';

const WithCounterHoc = (WrappedComponent, incrementCount) => {
    class WithCounter extends React.Component{
        state={
            count: 0
        }
        incrementCounter = () => {
            this.setState({count: this.state.count + incrementCount})
        }
        render(){
            const {name} = this.props
            return(
                <WrappedComponent 
                    incrementCounter={this.incrementCounter} 
                    count={this.state.count} 
                    name={name} 
                />
            )
        }
    }
    return WithCounter;
}
export default WithCounterHoc;
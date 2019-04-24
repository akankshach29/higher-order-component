import React from 'react';
import WithCounterHoc from './HOC/WithCounter';

class ClickCounter extends React.Component{
    render(){
        const {count, incrementCounter} = this.props
        return(
            <button onClick={incrementCounter}>Clicked {count} times</button>
        )
    }
}
export default WithCounterHoc(ClickCounter);
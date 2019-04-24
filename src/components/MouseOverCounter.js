import React from 'react';
import WithCounterHoc from './HOC/WithCounter'

class MouseOverCounter extends React.Component{
    render(){
        const {count, incrementCounter} = this.props
        return(
            <h3 onMouseOver={incrementCounter}>{this.props.name} hovered {count} times</h3>
        )
    }
}
export default WithCounterHoc(MouseOverCounter, 2); // parameter passed with the HOC
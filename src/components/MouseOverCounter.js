import React from 'react';
import WithCounterHoc from './HOC/WithCounter'

class MouseOverCounter extends React.Component{
    render(){
        const {count, incrementCounter} = this.props
        return(
            <h3 onMouseOver={incrementCounter}>Hovered {count} times</h3>
        )
    }
}
export default WithCounterHoc(MouseOverCounter);
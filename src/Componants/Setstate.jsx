import React from 'react';

class Setstate extends React.Component{
    state={a:10}

    change=()=>{
        this.setState({a:50})
        console.log(this.state.a)
    }

    render(){
        return <div>
            <button onClick={this.change}>Change</button>
            <h1>{this.state.a}</h1>
        </div>
    }
}
export default Setstate;


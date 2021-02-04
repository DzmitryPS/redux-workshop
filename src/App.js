import React, { Component } from 'react';

// class App extends Component {

//   state= {
//     count: 0
//   }

//   increment = () => this.setState({count: this.state.count + 1})

//   decrease = () => this.setState({count: this.state.count - 1})

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.decrease}>-</button>
//         <button onClick={this.increment}>+</button>
//       </div>
//     );
//   }
// }



import {connect} from 'react-redux';
import {increaseCounter, decreaseCounter} from './actions';

class App extends Component {

  increment = () => this.props.dispatch(increaseCounter(this.props.count))

  decrease = () => this.props.dispatch(decreaseCounter(this.props.count))

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.hello}</h1>
        <h1>{this.props.count}</h1>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    count: state.count,
    hello: state.hello,
  }
}


export default connect(mapStateToProps)(App);

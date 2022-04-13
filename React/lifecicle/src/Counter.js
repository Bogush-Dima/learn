import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("GetDerivedStateFromProps Props", props);
    console.log("GetDerivedStateFromProps State", state);
    return null;
  }

  componentDidMount() {
    console.log("DidMount", this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldUpdate This State", this.state);
    console.log("ShouldUpdate Props", nextProps);
    console.log("ShouldUpdate State", nextState);

    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("GetSnapshotBeforeUpdate Props", prevProps);
    console.log("GetSnapshotBeforeUpdate State", prevState);
    return null;
   }
   

  componentDidUpdate() {
    console.log("DidUpdate", this.state);
  }

  componentWillUnmount() {
    console.log("WillUnmount", this.state);
  }

  render() {
    const increase = () => {
      this.setState({
        count: this.state.count + 1
      })
    }

    return (
      <>
        <div>Count: {this.state.count}</div>
        <button onClick={increase}>Button</button>
      </>
    );
  }
}

export default Counter;
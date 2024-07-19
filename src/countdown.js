import React from 'react';
class Kountdown extends React.Component {
    state = {
      count: 10,
      timer: null,
    };
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState({ count: this.state.count - 1 });
      }, 1000);
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count && this.state.count === 0) {
        if (this.timer) {
          clearInterval(this.timer);
        }
      }
    }
  
    componentWillUnmount() {
      if (this.timer) {
        clearInterval(this.timer);
        
      }
    }
  
    render() {
      return (
        <div >
          <h1>{this.state.count}</h1>
        </div>
      );
    }
  }
export default Kountdown;
// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          The Button has been clicked{' '}
          <snap className="countClass">{count}</snap> times
        </h1>
        <p>Click the button to increase the count!</p>
        <div>
          <button type="button" onClick={this.onIncrement} className="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.round(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const evenOrOdd = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-type">Count is {evenOrOdd}</p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onIncrementCount}
            >
              Increment
            </button>
          </div>
          <p className="hint">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, evenOdd: 'Even'}

  onIncrement = () => {
    this.setState(prevState => ({
      count: Math.ceil(Math.random() * 100),
      evenOdd: prevState.count % 2 === 0 ? 'Even' : 'Odd',
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="MainContainer1">
        <div className="MainContainer">
          <h1 className="Heading">Count {count}</h1>
          <p className="paragraph">Count is {evenOdd}</p>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

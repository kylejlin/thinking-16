import React, { Component } from 'react'
import './App.css'
import Graph from './Graph'
import data from './data'
import parseData from './parseData'
import hypotheticalSplits from './hypotheticalSplits'

const existingSplits = parseData(data, true)

class App extends Component {
  state = {
    data: existingSplits.concat(hypotheticalSplits).concat([[300, 0, 0, 0]]),
    barWidth: 0.1,
    mult: 0.2
  }

  render() {
    document.body.style.setProperty('--bar-width', this.state.barWidth + 'vw')
    return (
      <div className="App">
        <div className="App-header">1600 Splits</div>

        <Graph
          data={this.state.data}
          barWidth={this.state.barWidth}
          mult={this.state.mult}
          goalTime={300}
        />
      </div>
    )
  }
}

export default App

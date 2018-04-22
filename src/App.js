import React, { Component } from 'react'
import './App.css'
import Graph from './Graph'
import data from './data'
import parseData from './parseData'
import hypotheticalSplits from './hypotheticalSplits'
import { numToStr } from './timeUtils'

const existingSplits = parseData(data, true)

const sum = (array) => {
  return array.reduce((sum, addend) => sum + addend, 0)
}

class App extends Component {
  state = {
    data: existingSplits.concat(hypotheticalSplits).concat([[300, 0, 0, 0]]),
    barWidth: 0.1,
    mult: 0.2,
    selectedGroup: 0
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
          updateSelectedGroup={this.updateSelectedGroup.bind(this)}
        />

        <div className="App-display">
          {this.state.data[this.state.selectedGroup].map(numToStr).join(', ') + ' = ' + numToStr(sum(this.state.data[this.state.selectedGroup]))}
        </div>
      </div>
    )
  }

  updateSelectedGroup(i) {
    this.setState({ selectedGroup: i })
  }
}

export default App

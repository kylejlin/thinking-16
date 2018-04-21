import React from 'react'
import './Bar.css'
import { numToStr } from './timeUtils'

const COLORS = 'red yellow lime blue'.split(' ')

const MULT = 0.2

const computeBarStyle = (index, splits, barWidth = 10) => {
  return {
    left: barWidth * index + 'vw',
    height: MULT * sum(splits) + 'vh'
  }
}

const computeBarPartStyle = (time, index, times) => {
  return {
    height: MULT * time + 'vh',
    bottom: MULT * sum(times.slice(0, index)) + 'vh',
    backgroundColor: COLORS[index]
  }
}

const sum = (array) => {
  return array.reduce((sum, addend) => sum + addend, 0)
}

export default ({ index, splits, barWidth }) => (
  <div className="Bar" style={computeBarStyle(index, splits, barWidth)}>
    {splits.map((time, i, times) => (
      <div
        className="Bar-part"
        key={i}
        style={computeBarPartStyle(time, i, times)}
      >
        {numToStr(time)}
      </div>
    ))}
  </div>
)

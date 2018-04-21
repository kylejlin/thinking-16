import React from 'react'
import './Bar.css'
import { numToStr } from './timeUtils'

const COLORS = 'red yellow lime blue'.split(' ')

const computeBarStyle = (index, splits, barWidth = 10, mult) => {
  return {
    left: barWidth * index + 'vw',
    height: mult * sum(splits) + 'vh'
  }
}

const computeBarPartStyle = (time, index, times, mult) => {
  return {
    height: mult * time + 'vh',
    bottom: mult * sum(times.slice(0, index)) + 'vh',
    backgroundColor: COLORS[index]
  }
}

const sum = (array) => {
  return array.reduce((sum, addend) => sum + addend, 0)
}

export default ({ index, splits, barWidth, mult, updateSelectedGroup }) => (
  <div className="Bar" style={computeBarStyle(index, splits, barWidth, mult)}>
    {splits.map((time, i, times) => (
      <div
        className="Bar-part"
        key={i}
        style={computeBarPartStyle(time, i, times, mult)}
        onMouseOver={() => updateSelectedGroup(index)}
      >
        {numToStr(time)}
      </div>
    ))}
  </div>
)

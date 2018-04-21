import React from 'react'
import './Graph.css'
import Bar from './Bar'
import { numToStr } from './timeUtils'

export default ({ data, barWidth, mult, goalTime, updateSelectedGroup }) => (
  <div className="Graph">
    {data.map((splits, i) => {
      return (
        <Bar
          key={i}
          index={i}
          splits={splits}
          barWidth={barWidth}
          mult={mult}
          updateSelectedGroup={updateSelectedGroup}
        />
      )
    })}
    <div
      className="Graph-overlay"
      style={{
        height: mult * goalTime + 'vh',
        width: barWidth * data.length + 'vw'
      }}
    >
      {numToStr(goalTime)}
    </div>
  </div>
)

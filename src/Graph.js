import React from 'react'
import './Graph.css'
import Bar from './Bar'

export default ({ data, barWidth }) => (
  <div className="Graph">
    {data.map((splits, i) => {
      return (
        <Bar
          key={i}
          index={i}
          splits={splits}
          barWidth={barWidth}
        />
      )
    })}
  </div>
)

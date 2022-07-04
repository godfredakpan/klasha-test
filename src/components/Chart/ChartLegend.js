import React from 'react'

function ChartLegend({ legends }) {
  return (
    <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
      {legends.map((legend) => (
        <div className="flex items-center" key={legend.title}>
          <span className={`inline-block w-2 h-2 mr-1 ${legend.color} rounded-full`}></span>
          <span style={{fontSize: '10px'}}>{legend.title}</span>
        </div>
      ))}
    </div>
  )
}

export default ChartLegend

import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import { Line } from 'react-chartjs-2'
import ChartLegend from '../Chart/ChartLegend'
import { lineLegends, lineOptions } from '../../data/chartsData'

function WorkResultCard({title}) {
  return (
    <Card colored className="text-white bg-dark-custom">
      <CardBody>
       <p className="mb-2 text-sm text-gray-600 dark:text-gray-400 card-title">{title} <span className='browse-more'>Browse more</span></p>
        <div>
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </div>
      </CardBody>
    </Card>
  )
}

export default WorkResultCard

import React, { useState } from 'react'
import { ResponsiveBullet } from '@nivo/bullet'
import chartTheme from '../../assets/chartTheme'

const ChartBullet = () => {
  const [data, setData] = useState([
    {
      "id": "temp.",
      "ranges": [
        37,
        25,
        69,
        0,
        120
      ],
      "measures": [
        79
      ],
      "markers": [
        97
      ]
    },
    {
      "id": "power",
      "ranges": [
        0.8499024850025595,
        1.0954692901603307,
        0.39008361057583896,
        0,
        2
      ],
      "measures": [
        0.608952549863467,
        1.2876472421112108
      ],
      "markers": [
        1.7698095722444662
      ]
    },
    {
      "id": "volume",
      "ranges": [
        4,
        51,
        8,
        25,
        13,
        36,
        0,
        60
      ],
      "measures": [
        37
      ],
      "markers": [
        39
      ]
    },
    {
      "id": "cost",
      "ranges": [
        148536,
        205833,
        241972,
        0,
        500000
      ],
      "measures": [
        80282,
        433382
      ],
      "markers": [
        301721
      ]
    },
    {
      "id": "revenue",
      "ranges": [
        4,
        0,
        11,
        0,
        11
      ],
      "measures": [
        3
      ],
      "markers": [
        8.280260380534585,
        8.11132950340028
      ]
    }
  ])

  return (
    <section className="chart-container text-gray-50">
       <h2 className="chart-title">Lorem ipsum 2010</h2>
     <ResponsiveBullet
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={35}
        titleAlign="start"
        titleOffsetX={-70}
        markerSize={1.15}
        rangeColors="red_purple"
        measureColors="spectral"
        markerColors="nivo"
        theme={chartTheme}
    />
    </section>
  )
}

export default ChartBullet
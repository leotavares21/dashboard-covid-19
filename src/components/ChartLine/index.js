import React, {useState} from 'react'
import { ResponsiveLine } from '@nivo/line'
import chartTheme from '../../assets/chartTheme'
import chartLegends from '../../assets/chartLegends'

const ChartLine = () => {
  const [data, setData] = useState([
    {
      "id": "japan",
      "color": "hsl(254, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 141
        },
        {
          "x": "helicopter",
          "y": 74
        },
        {
          "x": "boat",
          "y": 83
        },
        {
          "x": "train",
          "y": 279
        },
        {
          "x": "subway",
          "y": 237
        },
        {
          "x": "bus",
          "y": 170
        },
        {
          "x": "car",
          "y": 59
        },
        {
          "x": "moto",
          "y": 280
        },
        {
          "x": "bicycle",
          "y": 197
        },
        {
          "x": "horse",
          "y": 93
        },
        {
          "x": "skateboard",
          "y": 297
        },
        {
          "x": "others",
          "y": 285
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(290, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 32
        },
        {
          "x": "helicopter",
          "y": 149
        },
        {
          "x": "boat",
          "y": 272
        },
        {
          "x": "train",
          "y": 27
        },
        {
          "x": "subway",
          "y": 201
        },
        {
          "x": "bus",
          "y": 246
        },
        {
          "x": "car",
          "y": 119
        },
        {
          "x": "moto",
          "y": 67
        },
        {
          "x": "bicycle",
          "y": 148
        },
        {
          "x": "horse",
          "y": 204
        },
        {
          "x": "skateboard",
          "y": 254
        },
        {
          "x": "others",
          "y": 262
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(295, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 223
        },
        {
          "x": "helicopter",
          "y": 16
        },
        {
          "x": "boat",
          "y": 199
        },
        {
          "x": "train",
          "y": 120
        },
        {
          "x": "subway",
          "y": 198
        },
        {
          "x": "bus",
          "y": 187
        },
        {
          "x": "car",
          "y": 246
        },
        {
          "x": "moto",
          "y": 67
        },
        {
          "x": "bicycle",
          "y": 295
        },
        {
          "x": "horse",
          "y": 123
        },
        {
          "x": "skateboard",
          "y": 42
        },
        {
          "x": "others",
          "y": 93
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(308, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 79
        },
        {
          "x": "helicopter",
          "y": 116
        },
        {
          "x": "boat",
          "y": 13
        },
        {
          "x": "train",
          "y": 49
        },
        {
          "x": "subway",
          "y": 114
        },
        {
          "x": "bus",
          "y": 60
        },
        {
          "x": "car",
          "y": 111
        },
        {
          "x": "moto",
          "y": 55
        },
        {
          "x": "bicycle",
          "y": 238
        },
        {
          "x": "horse",
          "y": 54
        },
        {
          "x": "skateboard",
          "y": 272
        },
        {
          "x": "others",
          "y": 184
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(286, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 34
        },
        {
          "x": "helicopter",
          "y": 7
        },
        {
          "x": "boat",
          "y": 179
        },
        {
          "x": "train",
          "y": 172
        },
        {
          "x": "subway",
          "y": 249
        },
        {
          "x": "bus",
          "y": 204
        },
        {
          "x": "car",
          "y": 269
        },
        {
          "x": "moto",
          "y": 45
        },
        {
          "x": "bicycle",
          "y": 253
        },
        {
          "x": "horse",
          "y": 247
        },
        {
          "x": "skateboard",
          "y": 119
        },
        {
          "x": "others",
          "y": 290
        }
      ]
    }
  ])

  return (
    <section className="chart-container pb-6">
       <h2 className="chart-title">Lorem ipsum 2010</h2>
       <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'purple_red' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        theme = {chartTheme}
        legends={chartLegends}
    />
    </section>
  )
}

export default ChartLine

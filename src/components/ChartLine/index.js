import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ResponsiveLine } from '@nivo/line'

const ChartLine = ({ theme }) => {
  useEffect(() => {}, [theme])

  const [data, setData] = useState([
    {
      id: 'japan',
      color: 'hsl(254, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 141,
        },
        {
          x: 'helicopter',
          y: 74,
        },
        {
          x: 'boat',
          y: 83,
        },
        {
          x: 'train',
          y: 279,
        },
        {
          x: 'subway',
          y: 237,
        },
        {
          x: 'bus',
          y: 170,
        },
        {
          x: 'car',
          y: 59,
        },
        {
          x: 'moto',
          y: 280,
        },
        {
          x: 'bicycle',
          y: 197,
        },
        {
          x: 'horse',
          y: 93,
        },
        {
          x: 'skateboard',
          y: 297,
        },
        {
          x: 'others',
          y: 285,
        },
      ],
    },
    {
      id: 'france',
      color: 'hsl(290, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 32,
        },
        {
          x: 'helicopter',
          y: 149,
        },
        {
          x: 'boat',
          y: 272,
        },
        {
          x: 'train',
          y: 27,
        },
        {
          x: 'subway',
          y: 201,
        },
        {
          x: 'bus',
          y: 246,
        },
        {
          x: 'car',
          y: 119,
        },
        {
          x: 'moto',
          y: 67,
        },
        {
          x: 'bicycle',
          y: 148,
        },
        {
          x: 'horse',
          y: 204,
        },
        {
          x: 'skateboard',
          y: 254,
        },
        {
          x: 'others',
          y: 262,
        },
      ],
    },
    {
      id: 'us',
      color: 'hsl(295, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 223,
        },
        {
          x: 'helicopter',
          y: 16,
        },
        {
          x: 'boat',
          y: 199,
        },
        {
          x: 'train',
          y: 120,
        },
        {
          x: 'subway',
          y: 198,
        },
        {
          x: 'bus',
          y: 187,
        },
        {
          x: 'car',
          y: 246,
        },
        {
          x: 'moto',
          y: 67,
        },
        {
          x: 'bicycle',
          y: 295,
        },
        {
          x: 'horse',
          y: 123,
        },
        {
          x: 'skateboard',
          y: 42,
        },
        {
          x: 'others',
          y: 93,
        },
      ],
    },
    {
      id: 'germany',
      color: 'hsl(308, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 79,
        },
        {
          x: 'helicopter',
          y: 116,
        },
        {
          x: 'boat',
          y: 13,
        },
        {
          x: 'train',
          y: 49,
        },
        {
          x: 'subway',
          y: 114,
        },
        {
          x: 'bus',
          y: 60,
        },
        {
          x: 'car',
          y: 111,
        },
        {
          x: 'moto',
          y: 55,
        },
        {
          x: 'bicycle',
          y: 238,
        },
        {
          x: 'horse',
          y: 54,
        },
        {
          x: 'skateboard',
          y: 272,
        },
        {
          x: 'others',
          y: 184,
        },
      ],
    },
    {
      id: 'norway',
      color: 'hsl(286, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 34,
        },
        {
          x: 'helicopter',
          y: 7,
        },
        {
          x: 'boat',
          y: 179,
        },
        {
          x: 'train',
          y: 172,
        },
        {
          x: 'subway',
          y: 249,
        },
        {
          x: 'bus',
          y: 204,
        },
        {
          x: 'car',
          y: 269,
        },
        {
          x: 'moto',
          y: 45,
        },
        {
          x: 'bicycle',
          y: 253,
        },
        {
          x: 'horse',
          y: 247,
        },
        {
          x: 'skateboard',
          y: 119,
        },
        {
          x: 'others',
          y: 290,
        },
      ],
    },
  ])

  return (
    <section className="chart-container">
      <h2 className="chart-title">Lorem ipsum 2010</h2>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
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
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'purple_red' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        theme={{
          textColor: `${localStorage.theme === '1' ? '#fafafa' : '#333333'}`,
          axis: {
            fontSize: '14px',
            tickColor: `${localStorage.theme === '1' ? '#eee' : '#333333'}`,
            ticks: {
              line: {
                stroke: '#555555',
              },
              text: {
                fill: `${localStorage.theme === '1' ? '#eee' : '#333333'}`,
              },
            },
            legend: {
              text: {
                fill: `${localStorage.theme === '1' ? '#aaaaaa' : '#888888'}`,
              },
            },
          },
          grid: {
            line: {
              stroke: '#555555',
            },
          },
        }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: `${
                    localStorage.theme === '1'
                      ? 'rgba(39, 50, 74, .5)'
                      : 'rgba(234, 234, 234, .9)'
                  }`,
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </section>
  )
}

const mapStateToProps = state => ({
  theme: state.topbarReducer.theme,
})

export default connect(mapStateToProps)(ChartLine)

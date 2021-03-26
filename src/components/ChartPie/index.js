import React, { useState } from 'react'
import { ResponsivePie } from '@nivo/pie'

const ChartPie = () => {
  const [data, setData] = useState([
    {
      "id": "sass",
      "label": "sass",
      "value": 99,
      "color": "hsl(195, 70%, 50%)"
    },
    {
      "id": "make",
      "label": "make",
      "value": 62,
      "color": "hsl(315, 70%, 50%)"
    },
    {
      "id": "elixir",
      "label": "elixir",
      "value": 306,
      "color": "hsl(353, 70%, 50%)"
    },
    {
      "id": "ruby",
      "label": "ruby",
      "value": 399,
      "color": "hsl(222, 70%, 50%)"
    },
    {
      "id": "python",
      "label": "python",
      "value": 73,
      "color": "hsl(197, 70%, 50%)"
    }
  ])

  return (
    <section className="chart-container">
      <h2 className="chart-title">Lorem ipsum 2010</h2>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.6}
        padAngle={2}
        cornerRadius={4}
        colors={{ scheme: 'purple_red' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', '0.8' ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkDiagonalLength={7}
        radialLabelsLinkHorizontalLength={11}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[]}
    />
    </section>
  )
}

export default ChartPie

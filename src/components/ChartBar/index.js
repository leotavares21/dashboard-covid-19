import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ResponsiveBar } from '@nivo/bar'

const ChartBar = ({ theme }) => {
  useEffect(() => {}, [theme])

  const [data, setData] = useState([
    {
      country: 'AD',
      'hot dog': 114,
      'hot dogColor': 'hsl(6, 70%, 50%)',
      burger: 135,
      burgerColor: 'hsl(268, 70%, 50%)',
      sandwich: 142,
      sandwichColor: 'hsl(188, 70%, 50%)',
      kebab: 112,
      kebabColor: 'hsl(136, 70%, 50%)',
      fries: 37,
      friesColor: 'hsl(180, 70%, 50%)',
      donut: 117,
      donutColor: 'hsl(76, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 74,
      'hot dogColor': 'hsl(208, 70%, 50%)',
      burger: 90,
      burgerColor: 'hsl(133, 70%, 50%)',
      sandwich: 56,
      sandwichColor: 'hsl(284, 70%, 50%)',
      kebab: 137,
      kebabColor: 'hsl(331, 70%, 50%)',
      fries: 120,
      friesColor: 'hsl(114, 70%, 50%)',
      donut: 152,
      donutColor: 'hsl(117, 70%, 50%)',
    },
    {
      country: 'AF',
      'hot dog': 131,
      'hot dogColor': 'hsl(173, 70%, 50%)',
      burger: 99,
      burgerColor: 'hsl(131, 70%, 50%)',
      sandwich: 30,
      sandwichColor: 'hsl(135, 70%, 50%)',
      kebab: 120,
      kebabColor: 'hsl(213, 70%, 50%)',
      fries: 44,
      friesColor: 'hsl(218, 70%, 50%)',
      donut: 127,
      donutColor: 'hsl(337, 70%, 50%)',
    },
    {
      country: 'AG',
      'hot dog': 103,
      'hot dogColor': 'hsl(129, 70%, 50%)',
      burger: 12,
      burgerColor: 'hsl(341, 70%, 50%)',
      sandwich: 129,
      sandwichColor: 'hsl(123, 70%, 50%)',
      kebab: 123,
      kebabColor: 'hsl(353, 70%, 50%)',
      fries: 39,
      friesColor: 'hsl(306, 70%, 50%)',
      donut: 117,
      donutColor: 'hsl(118, 70%, 50%)',
    },
    {
      country: 'AI',
      'hot dog': 100,
      'hot dogColor': 'hsl(42, 70%, 50%)',
      burger: 193,
      burgerColor: 'hsl(136, 70%, 50%)',
      sandwich: 172,
      sandwichColor: 'hsl(93, 70%, 50%)',
      kebab: 123,
      kebabColor: 'hsl(191, 70%, 50%)',
      fries: 185,
      friesColor: 'hsl(331, 70%, 50%)',
      donut: 143,
      donutColor: 'hsl(184, 70%, 50%)',
    },
    {
      country: 'AL',
      'hot dog': 173,
      'hot dogColor': 'hsl(266, 70%, 50%)',
      burger: 188,
      burgerColor: 'hsl(302, 70%, 50%)',
      sandwich: 134,
      sandwichColor: 'hsl(334, 70%, 50%)',
      kebab: 31,
      kebabColor: 'hsl(50, 70%, 50%)',
      fries: 112,
      friesColor: 'hsl(40, 70%, 50%)',
      donut: 68,
      donutColor: 'hsl(349, 70%, 50%)',
    },
    {
      country: 'AM',
      'hot dog': 114,
      'hot dogColor': 'hsl(3, 70%, 50%)',
      burger: 39,
      burgerColor: 'hsl(272, 70%, 50%)',
      sandwich: 135,
      sandwichColor: 'hsl(273, 70%, 50%)',
      kebab: 155,
      kebabColor: 'hsl(197, 70%, 50%)',
      fries: 81,
      friesColor: 'hsl(208, 70%, 50%)',
      donut: 172,
      donutColor: 'hsl(327, 70%, 50%)',
    },
  ])
  return (
    <section className="chart-container">
      <h2 className="chart-title">Lorem ipsum 2010</h2>
      <ResponsiveBar
        data={data}
        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'purple_red' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'fries',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'sandwich',
            },
            id: 'lines',
          },
        ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
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
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </section>
  )
}

const mapStateToProps = state => ({
  theme: state.topbarReducer.theme,
})

export default connect(mapStateToProps)(ChartBar)

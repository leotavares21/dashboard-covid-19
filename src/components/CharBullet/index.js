import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ResponsiveBar } from '@nivo/bar'
import * as ChartBarActions from '../../store/actions/chartBar'

const ChartBullet = ({ theme, data }) => {
  useEffect(() => {}, [theme])

  return (
    <section className="chart-container">
      <h2 className="chart-title">Lorem ipsum 2010</h2>
      <ResponsiveBar
        data={data}
        keys={['ativos', 'confirmados', 'curados']}
        indexBy="estados"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'pink_yellowGreen' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'curados',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'confirmados',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'ativos',
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
          legend: 'vacinados',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'países',
          legendPosition: 'middle',
          legendOffset: -57,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={localStorage.theme === '1' ? '#fafafa' : '#000000'}
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
  data: state.chartBarReducer.data,
})

export default connect(mapStateToProps)(ChartBullet)

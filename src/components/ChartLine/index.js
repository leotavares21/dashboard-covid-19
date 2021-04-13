import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ResponsiveLine } from '@nivo/line'
import { bindActionCreators } from 'redux'
import * as ChartLineActions from '../../store/actions/chartLine'

const ChartLine = ({ theme, data, fetchChartLineRequest }) => {
  useEffect(() => {
    fetchChartLineRequest()
  }, [theme])

  return (
    <section className="chart-container">
      <h2 className="chart-title">Vítimas fatais de COVID-19 em 14 dias</h2>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'data',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'vítimas',
          legendOffset: -50,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'pink_yellowGreen' }}
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
  data: state.chartLineReducer.data,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ChartLineActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChartLine)

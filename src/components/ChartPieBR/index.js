import React, { useEffect } from 'react'
import { ResponsivePie } from '@nivo/pie'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ChartPieBRActions from '../../store/actions/chartPieBR'

const ChartPieBR = ({ theme, data, fetchChartPieBRRequest }) => {
  useEffect(() => {
    fetchChartPieBRRequest()
  }, [theme])

  return (
    <section className="chart-container">
      <h2 className="chart-title">Casos de COVID-19 no Brasil</h2>
      <ResponsivePie
        data={data}
        margin={{ top: 70, right: 80, bottom: 80, left: 80 }}
        tooltipFormat="> .3s"
        valueFormat="> .3s"
        innerRadius={0.6}
        padAngle={2}
        cornerRadius={2}
        colors={{ scheme: 'pink_yellowGreen' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', '0.8']] }}
        radialLabelsSkipAngle={10}
        radialLabelsLinkDiagonalLength={12}
        radialLabelsLinkHorizontalLength={16}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        sliceLabelsSkipAngle={10}
        arcLabelsTextColor="#ffffff"
        theme={{
          textColor: `${localStorage.theme === '1' ? '#fafafa' : '#000000'}`,
        }}
        sliceLabelsSkipAngle="> .3s"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ativos',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'recuperados',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'total',
            },
            id: 'lines',
          },
        ]}
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: false,
            translateX: -65,
            translateY: 57,
            itemsSpacing: 5,
            itemWidth: 62,
            itemHeight: 10,
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 9,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#db2777',
                },
              },
            ],
            itemTextColor: `${
              localStorage.theme === '1' ? '#eeeeee' : '#000000'
            }`,
          },
        ]}
      />
    </section>
  )
}

const mapStateToProps = state => ({
  theme: state.topbarReducer.theme,
  data: state.chartPieBRReducer.data,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ChartPieBRActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChartPieBR)

import React, { useState, useEffect } from 'react'
import { ResponsiveChoroplethCanvas } from '@nivo/geo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ChartChoroplethActions from '../../store/actions/chartChoropleth'
import * as d3 from 'd3'

const ChartChoropleth = ({ theme, data, fetchChartChoroplethRequest }) => {
  const [geoFeatures, setGeoFeatures] = useState([])
  useEffect(() => {
    getFeatures()
  }, [])

  useEffect(() => {
    fetchChartChoroplethRequest()
  }, [theme])

  const getFeatures = async () => {
    await d3
      .json(
        'https://raw.githubusercontent.com/plouc/nivo/master/website/src/data/components/geo/world_countries.json'
      )
      .then(function (data) {
        setGeoFeatures(data.features)
      })
  }

  return (
    <section className="chart-container relative">
      <h2 className="chart-title bottom-2">Casos de COVID-19 por milhão de habitantes</h2>
      <ResponsiveChoroplethCanvas
        data={data}
        features={geoFeatures}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="PuRd"
        domain={[0, 100000]}
        unknownColor="#a3a3a3"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="rgba(0, 0, 0, .2)"
        borderWidth={0.5}
        borderColor="#5c5c5c"
        legends={[
          {
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -60,
            itemTextColor: `${
              localStorage.theme === '1' ? '#fafafa' : '#333333'
            }`,
            itemsSpacing: 0,
            itemWidth: 92,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 18,
          },
        ]}
      />
    </section>
  )
}

const mapStateToProps = state => ({
  theme: state.topbarReducer.theme,
  data: state.chartChoroplethReducer.data,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ChartChoroplethActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChartChoropleth)

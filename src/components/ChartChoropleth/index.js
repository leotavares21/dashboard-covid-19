import React, { useEffect, useState } from 'react'
import { ResponsiveChoroplethCanvas } from '@nivo/geo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ChartChoroplethActions from '../../store/actions/chartChoropleth'

const ChartChoropleth = ({ theme, datas, fetchChartChoroplethRequest }) => {
  const [scale, setScale] = useState(100)
  const [translationX, setTranslationX] = useState(0.5)
  const [translationY, setTranslationY] = useState(0.5)
  const [time, setTime] = useState(null)
  const [startX, setStartX] = useState(300)
  const [startY, setStartY] = useState(300)

  useEffect(() => {
    fetchChartChoroplethRequest()
  }, [theme])

  const handleScaleMore = () => {
    if (scale === 620) return
    setScale(scale => scale + 40)
  }

  const handleScaleLess = () => {
    if (scale === 60) return
    setScale(scale => scale - 40)
  }

  const transXR = () => {
    setTranslationX(transX => transX + 0.25)
  }

  const transXL = () => {
    setTranslationX(transL => transL - 0.25)
  }

  const RepeatXR = () => {
    if (translationX < -1.75) {
      setTranslationX(-1.75)
    } else {
      transXR()
      setTime(setTimeout(RepeatXR, startX))
      setStartX(startX => startX / 2)
    }
  }

  const RepeatXL = () => {
    if (translationX > 1.75) {
      setTranslationX(1.75)
    } else {
      transXL()
      setTime(setTimeout(RepeatXL, startX))
      setStartX(startX => startX / 2)
    }
  }

  const handleRepeatXL = () => {
    RepeatXL()
  }

  const handleRepeatXR = () => {
    RepeatXR()
  }

  // Y

  const transYT = () => {
    setTranslationY(transT => transT + 0.25)
  }

  const transYB = () => {
    setTranslationY(transB => transB - 0.25)
  }

  const RepeatYT = () => {
    if (translationY < -1.75) {
      setTranslationY(-1.75)
    } else {
      transYT()
      setTime(setTimeout(RepeatYT, startX))
      setStartY(startY => startY / 2)
    }
  }

  const RepeatYB = () => {
    if (translationY > 1.75) {
      setTranslationY(1.75)
    } else {
      transYB()
      setTime(setTimeout(RepeatYB, startY))
      setStartY(startY => startY / 2)
    }
  }

  const handleRepeatYB = () => {
    RepeatYB()
  }

  const handleRepeatYT = () => {
    RepeatYT()
  }

  const handleRepeatOff = () => {
    clearTimeout(time)
    setStartX(300)
    setStartY(300)
  }

  const handleReset = () => {
    setScale(100)
    setTranslationX(0.5)
    setTranslationY(0.5)
    clearTimeout(time)
  }
  return (
    <section className="chart-container relative">
      <h2 className="chart-title bottom-2">
        Casos de COVID-19 por milhão de habitantes
      </h2>

      <div className="text-gray-800 dark:text-gray-50 absolute right-4 sm:bottom-2 bottom-8 z-50">
        <button onClick={handleReset} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="block w-4 cursor-pointer font-bold py-0.5 my-1 bg-gray-500 bg-opacity-40 dark:bg-opacity-90 focus:outline-none"
          onClick={handleScaleMore}
        >
          +
        </button>
        <button
          className="block w-4 cursor-pointer font-bold py-0.5 my-1 bg-gray-500 bg-opacity-40 dark:bg-opacity-90 focus:outline-none"
          onClick={handleScaleLess}
        >
          -
        </button>
      </div>

      <div className="text-gray-800 dark:text-gray-50 absolute right-16 bottom-6 z-50">
        <button
          className="focus:bg-gray-500 focus:bg-opacity-40 dark:focus:bg-opacity-90 focus:outline-none block"
          onMouseUp={handleRepeatOff}
          onMouseDown={handleRepeatYT}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <button
          className="focus:bg-gray-500 focus:bg-opacity-40 dark:focus:bg-opacity-90 focus:outline-none block mt-4"
          onMouseUp={handleRepeatOff}
          onMouseDown={handleRepeatYB}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <button
          className="focus:bg-gray-500 focus:bg-opacity-40 dark:focus:bg-opacity-90 focus:outline-none absolute top-4 -right-4"
          onMouseUp={handleRepeatOff}
          onMouseDown={handleRepeatXL}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          className="focus:bg-gray-500 focus:bg-opacity-40 dark:focus:bg-opacity-90 focus:outline-none absolute top-4 -left-4"
          onMouseUp={handleRepeatOff}
          onMouseDown={handleRepeatXR}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <ResponsiveChoroplethCanvas
        data={datas.data}
        features={datas.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="PuRd"
        domain={[0, 100000]}
        unknownColor="#a3a3a3"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={scale}
        projectionTranslation={[translationX, translationY]}
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
              localStorage.theme === '1' ? '#fafafa' : '#000000'
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
  datas: state.chartChoroplethReducer,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ChartChoroplethActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChartChoropleth)

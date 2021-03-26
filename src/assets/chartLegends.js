const chartLegends = [
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
      itemTextColor: '#fafafa',
      symbolSize: 12,
      symbolShape: 'circle',
      effects: [
          {
              on: 'hover',
              style: {
                  itemBackground: 'rgba(255, 255, 255, .9)',
                  itemOpacity: 1
              }
          }
      ],

  }
]


export default chartLegends

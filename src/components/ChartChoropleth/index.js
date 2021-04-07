import React, { useState, useEffect } from 'react'
import { ResponsiveChoroplethCanvas } from '@nivo/geo'
import { connect } from 'react-redux'
import * as d3 from 'd3'

const ChartChoropleth = ({ theme }) => {
  const [geoFeatures, setGeoFeatures] = useState([])
  useEffect(() => {
    getFeatures()
  }, [])

  useEffect(() => {}, [theme])

  const [data, setData] = useState([
    {
      id: 'AFG',
      value: 794267,
    },
    {
      id: 'AGO',
      value: 360918,
    },
    {
      id: 'ALB',
      value: 221357,
    },
    {
      id: 'ARE',
      value: 483891,
    },
    {
      id: 'ARG',
      value: 839648,
    },
    {
      id: 'ARM',
      value: 253955,
    },
    {
      id: 'ATA',
      value: 4538,
    },
    {
      id: 'ATF',
      value: 735726,
    },
    {
      id: 'BRA',
      value: 125478,
    },
    {
      id: 'AUT',
      value: 155864,
    },
    {
      id: 'AZE',
      value: 325376,
    },
    {
      id: 'BDI',
      value: 839812,
    },
    {
      id: 'BEL',
      value: 254601,
    },
    {
      id: 'BEN',
      value: 395421,
    },
    {
      id: 'BFA',
      value: 736459,
    },
    {
      id: 'BGD',
      value: 655107,
    },
    {
      id: 'BGR',
      value: 513997,
    },
    {
      id: 'BHS',
      value: 440380,
    },
    {
      id: 'BIH',
      value: 304759,
    },
    {
      id: 'BLR',
      value: 520156,
    },
    {
      id: 'BLZ',
      value: 765813,
    },
    {
      id: 'BOL',
      value: 497144,
    },
    {
      id: 'BRN',
      value: 285152,
    },
    {
      id: 'BTN',
      value: 393111,
    },
    {
      id: 'BWA',
      value: 972768,
    },
    {
      id: 'CAF',
      value: 428978,
    },
    {
      id: 'CAN',
      value: 640976,
    },
    {
      id: 'CHE',
      value: 46365,
    },
    {
      id: 'CHL',
      value: 33015,
    },
    {
      id: 'CHN',
      value: 756556,
    },
    {
      id: 'CIV',
      value: 585207,
    },
    {
      id: 'CMR',
      value: 250434,
    },
    {
      id: 'COG',
      value: 428821,
    },
    {
      id: 'COL',
      value: 1415,
    },
    {
      id: 'CRI',
      value: 215507,
    },
    {
      id: 'CUB',
      value: 178123,
    },
    {
      id: '-99',
      value: 79532,
    },
    {
      id: 'CYP',
      value: 598728,
    },
    {
      id: 'CZE',
      value: 938361,
    },
    {
      id: 'DEU',
      value: 75898,
    },
    {
      id: 'DJI',
      value: 294628,
    },
    {
      id: 'DNK',
      value: 692448,
    },
    {
      id: 'DOM',
      value: 429056,
    },
    {
      id: 'DZA',
      value: 540067,
    },
    {
      id: 'ECU',
      value: 976187,
    },
    {
      id: 'EGY',
      value: 669216,
    },
    {
      id: 'ERI',
      value: 788381,
    },
    {
      id: 'ESP',
      value: 531481,
    },
    {
      id: 'EST',
      value: 7723,
    },
    {
      id: 'ETH',
      value: 253740,
    },
    {
      id: 'FIN',
      value: 674137,
    },
    {
      id: 'FJI',
      value: 493011,
    },
    {
      id: 'FLK',
      value: 79872,
    },
    {
      id: 'FRA',
      value: 288897,
    },
    {
      id: 'GAB',
      value: 430124,
    },
    {
      id: 'GBR',
      value: 111621,
    },
    {
      id: 'GEO',
      value: 728597,
    },
    {
      id: 'GHA',
      value: 661319,
    },
    {
      id: 'GIN',
      value: 79097,
    },
    {
      id: 'GMB',
      value: 585752,
    },
    {
      id: 'GNB',
      value: 639514,
    },
    {
      id: 'GNQ',
      value: 760018,
    },
    {
      id: 'GRC',
      value: 911910,
    },
    {
      id: 'GTM',
      value: 106311,
    },
    {
      id: 'GUY',
      value: 482074,
    },
    {
      id: 'HND',
      value: 489477,
    },
    {
      id: 'HRV',
      value: 476788,
    },
    {
      id: 'HTI',
      value: 77222,
    },
    {
      id: 'HUN',
      value: 501580,
    },
    {
      id: 'IDN',
      value: 533596,
    },
    {
      id: 'IND',
      value: 241438,
    },
    {
      id: 'IRL',
      value: 11839,
    },
    {
      id: 'IRN',
      value: 46063,
    },
    {
      id: 'IRQ',
      value: 412207,
    },
    {
      id: 'ISL',
      value: 529204,
    },
    {
      id: 'ISR',
      value: 740046,
    },
    {
      id: 'ITA',
      value: 17618,
    },
    {
      id: 'JAM',
      value: 350458,
    },
    {
      id: 'JOR',
      value: 102252,
    },
    {
      id: 'JPN',
      value: 296774,
    },
    {
      id: 'KAZ',
      value: 945345,
    },
    {
      id: 'KEN',
      value: 76680,
    },
    {
      id: 'KGZ',
      value: 162466,
    },
    {
      id: 'KHM',
      value: 830311,
    },
    {
      id: 'OSA',
      value: 76954,
    },
    {
      id: 'KWT',
      value: 662601,
    },
    {
      id: 'LAO',
      value: 420828,
    },
    {
      id: 'LBN',
      value: 14976,
    },
    {
      id: 'LBR',
      value: 280580,
    },
    {
      id: 'LBY',
      value: 600132,
    },
    {
      id: 'LKA',
      value: 213012,
    },
    {
      id: 'LSO',
      value: 976531,
    },
    {
      id: 'LTU',
      value: 503555,
    },
    {
      id: 'LUX',
      value: 903551,
    },
    {
      id: 'LVA',
      value: 403139,
    },
    {
      id: 'MAR',
      value: 647834,
    },
    {
      id: 'MDA',
      value: 765255,
    },
    {
      id: 'MDG',
      value: 616235,
    },
    {
      id: 'MEX',
      value: 318196,
    },
    {
      id: 'MKD',
      value: 951181,
    },
    {
      id: 'MLI',
      value: 785884,
    },
    {
      id: 'MMR',
      value: 897517,
    },
    {
      id: 'MNE',
      value: 278562,
    },
    {
      id: 'MNG',
      value: 354460,
    },
    {
      id: 'MOZ',
      value: 284580,
    },
    {
      id: 'MRT',
      value: 302963,
    },
    {
      id: 'MWI',
      value: 731973,
    },
    {
      id: 'MYS',
      value: 920279,
    },
    {
      id: 'NAM',
      value: 977216,
    },
    {
      id: 'NCL',
      value: 474666,
    },
    {
      id: 'NER',
      value: 37736,
    },
    {
      id: 'NGA',
      value: 127758,
    },
    {
      id: 'NIC',
      value: 86691,
    },
    {
      id: 'NLD',
      value: 387970,
    },
    {
      id: 'NOR',
      value: 63155,
    },
    {
      id: 'NPL',
      value: 266440,
    },
    {
      id: 'NZL',
      value: 833797,
    },
    {
      id: 'OMN',
      value: 190626,
    },
    {
      id: 'PAK',
      value: 586581,
    },
    {
      id: 'PAN',
      value: 44071,
    },
    {
      id: 'PER',
      value: 938384,
    },
    {
      id: 'PHL',
      value: 179291,
    },
    {
      id: 'PNG',
      value: 541010,
    },
    {
      id: 'POL',
      value: 922944,
    },
    {
      id: 'PRI',
      value: 142771,
    },
    {
      id: 'PRT',
      value: 864158,
    },
    {
      id: 'PRY',
      value: 871882,
    },
    {
      id: 'QAT',
      value: 533890,
    },
    {
      id: 'ROU',
      value: 118718,
    },
    {
      id: 'RUS',
      value: 295462,
    },
    {
      id: 'RWA',
      value: 211302,
    },
    {
      id: 'ESH',
      value: 444143,
    },
    {
      id: 'SAU',
      value: 541693,
    },
    {
      id: 'SDN',
      value: 908392,
    },
    {
      id: 'SDS',
      value: 920380,
    },
    {
      id: 'SEN',
      value: 776351,
    },
    {
      id: 'SLB',
      value: 824819,
    },
    {
      id: 'SLE',
      value: 254739,
    },
    {
      id: 'SLV',
      value: 330723,
    },
    {
      id: 'ABV',
      value: 549561,
    },
    {
      id: 'SOM',
      value: 903627,
    },
    {
      id: 'SRB',
      value: 617224,
    },
    {
      id: 'SUR',
      value: 454319,
    },
    {
      id: 'SVK',
      value: 148539,
    },
    {
      id: 'SVN',
      value: 981620,
    },
    {
      id: 'SWZ',
      value: 519597,
    },
    {
      id: 'SYR',
      value: 758656,
    },
    {
      id: 'TCD',
      value: 813548,
    },
    {
      id: 'TGO',
      value: 481856,
    },
    {
      id: 'THA',
      value: 337840,
    },
    {
      id: 'TJK',
      value: 518727,
    },
    {
      id: 'TKM',
      value: 244765,
    },
    {
      id: 'TLS',
      value: 237570,
    },
    {
      id: 'TTO',
      value: 353854,
    },
    {
      id: 'TUN',
      value: 351709,
    },
    {
      id: 'TUR',
      value: 611991,
    },
    {
      id: 'TWN',
      value: 327609,
    },
    {
      id: 'TZA',
      value: 902312,
    },
    {
      id: 'UGA',
      value: 702469,
    },
    {
      id: 'UKR',
      value: 697144,
    },
    {
      id: 'URY',
      value: 441723,
    },
    {
      id: 'USA',
      value: 809125,
    },
    {
      id: 'UZB',
      value: 957601,
    },
    {
      id: 'VEN',
      value: 754146,
    },
    {
      id: 'VNM',
      value: 407458,
    },
    {
      id: 'VUT',
      value: 688807,
    },
    {
      id: 'PSE',
      value: 640389,
    },
    {
      id: 'YEM',
      value: 110561,
    },
    {
      id: 'ZAF',
      value: 798761,
    },
    {
      id: 'ZMB',
      value: 761256,
    },
    {
      id: 'ZWE',
      value: 441433,
    },
    {
      id: 'KOR',
      value: 146795,
    },
  ])

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
    <section className="chart-container">
      <ResponsiveChoroplethCanvas
        data={data}
        features={geoFeatures}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="PuRd"
        domain={[0, 1000000]}
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
})

export default connect(mapStateToProps)(ChartChoropleth)

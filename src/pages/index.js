import { connect } from 'react-redux'

import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import ChartPie from '../components/ChartPie'
import ChartLine from '../components/ChartLine'
import ChartChoropleth from '../components/ChartChoropleth'
import ChartBar from '../components/ChartBar'
import ChartBullet from '../components/CharBullet'

const Home = ({ open }) => {
  return (
    <div className="lg:flex">
      <header
        className={`${
          open ? 'lg:w-0' : 'lg:w-1/6'
        } transition-all duration-200 ease-out`}
      >
        <SideBar open={open} />
      </header>

      <div
        className={`${
          open ? 'lg:w-full' : 'lg:w-5/6'
        } mb-0.5 transition-width duration-200 ease-out`}
      >
        <TopBar />

        <main className="grid grid-cols-1 lg:grid-cols-4 gap-3 m-2.5">
          <div className="xl:col-span-1 lg:col-span-2">
            <ChartPie />
          </div>
          <div className="xl:col-span-1 lg:col-span-2">
            <ChartPie />
          </div>
          <div className="xl:col-span-2 lg:col-span-4">
            <ChartLine />
          </div>
          <div className="xl:col-span-2 lg:col-span-4">
            <ChartChoropleth />
          </div>
          <div className="xl:col-span-2 lg:col-span-4">
            <ChartBar />
          </div>
          <div className="lg:col-span-4">
            <ChartBullet />
          </div>
        </main>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  open: state.topbarReducer.open,
})

export default connect(mapStateToProps, null)(Home)

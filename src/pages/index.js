import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import ChartPie from '../components/ChartPie'
import ChartLine from '../components/ChartLine'
import ChartChoropleth from '../components/ChartChoropleth'
import ChartBar from '../components/ChartBar'
import ChartBullet from '../components/CharBullet'

const Home = () => {
  return (
    <div className="dark:bg-gray-900 grid grid-cols-1 lg:grid-cols-6">
      <header>
        <SideBar />
      </header>

      <div className="dark:bg-gray-800 col-span-5 mb-4">
        <TopBar />

        <main className="grid grid-cols-1 lg:grid-cols-4 gap-3 m-2.5">
          <div className="">
            <ChartPie />
          </div>
          <div className="">
            <ChartPie />
          </div>
          <div className="lg:col-span-2">
            <ChartLine />
          </div>
          <div className="lg:col-span-2">
            <ChartChoropleth />
          </div>
          <div className="lg:col-span-2">
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

export default Home

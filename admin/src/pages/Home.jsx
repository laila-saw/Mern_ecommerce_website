import React from 'react'
import Chart from '../components/Chart'
import FeaturedInfo from '../components/FeaturedInfo'
import WidgetLg from '../components/WidgetLg'
import WidgetSm from '../components/WidgetSm'
import { UserData } from '../Data'

const Home = () => {
  return (
    <div className="page">
      <FeaturedInfo />
      <Chart data={UserData} title="User Analytics" grid dataKey={"Active User"} />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
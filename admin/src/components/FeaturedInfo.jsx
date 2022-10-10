import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'

const FeaturedInfo = () => {
    return (
      <div className="featured">
        <div className="featuredItem">
          <span className="title ">Total Order</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">43</span>
            <span className="featuredMoneyRate">
              -11.4 <ArrowUpward className="featuredIcon negatif"/>
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="title ">Revanue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 2.415</span>
            <span className="featuredMoneyRate">
              -11.4 <ArrowDownward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="title ">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 4.415</span>
            <span className="featuredMoneyRate">
              -1.4 <ArrowDownward className="featuredIcon negatif" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="title ">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$ 2.22</span>
            <span className="featuredMoneyRate">
              +1.4 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
    )
  }

export default FeaturedInfo
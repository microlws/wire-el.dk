import React from "react"
import { connect } from "react-redux"
import SwipeableViews from "react-swipeable-views"
import PromotionCard from "component/PromotionCard"
import promotionData from "./promotion.json"
import contentData from "./content.json"
import "./index.css"

const HomeRoute = ({ width, deviceBreakpoint }) => {
  return (
    <div className="HomeRoute">
      {width > deviceBreakpoint && (
        <div className="HomeRoute__megatron">
          <SwipeableViews enableMouseEvents className="HomeRoute__megatron-media">
            {contentData.imageList.map(image => (
              <div
                className="HomeRoute__megatron-media-slide"
                key={`slider-${image}`}
                style={{ backgroundImage: `url("${image}")` }}
              />
            ))}
          </SwipeableViews>
        </div>
      )}
      <div className="HomeRoute__promotion">
        <div className="HomeRoute__promotion-inner">
          <PromotionCard {...promotionData[0]} className="HomeRoute__promotion-card" />
          <PromotionCard {...promotionData[1]} className="HomeRoute__promotion-card" />
          <PromotionCard {...promotionData[2]} className="HomeRoute__promotion-card" />
        </div>
      </div>
      <div className="HomeRoute__content">
        <div className="HomeRoute__content-inner">
          <PromotionCard {...contentData} className="HomeRoute__content-card" />
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    width: state.app.width,
    deviceBreakpoint: state.app.deviceBreakpoint,
  }
}

export default connect(mapStateToProps, null)(HomeRoute)

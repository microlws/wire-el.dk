import React from "react"
import PromotionCard from "component/PromotionCard"
import Typography from "material-ui/Typography"
import "./index.css"

const ServiceRoute = () => (
  <div className="ServiceRoute">
    <div className="ServiceRoute__inner">
      <Typography className="ServiceRoute__title" gutterBottom variant="display2" component="h1">
        Services vi tilbyder
      </Typography>
      <div className="ServiceRoute__services">
        <div className="ServiceRoute__services-column">
          <PromotionCard className="ServiceRoute__services-item" />
          <PromotionCard className="ServiceRoute__services-item" />
          <PromotionCard className="ServiceRoute__services-item" />
        </div>
        <div className="ServiceRoute__services-column">
          <PromotionCard className="ServiceRoute__services-item" />
          <PromotionCard className="ServiceRoute__services-item" />
          <PromotionCard className="ServiceRoute__services-item" />
        </div>
      </div>
    </div>
  </div>
)

export default ServiceRoute

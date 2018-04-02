import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card"
import SwipeableViews from "react-swipeable-views"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import "./index.css"

const createSwipeView = (className, imageList) => (
  <SwipeableViews enableMouseEvents className={`${className}__media PromotionCard__media`}>
    {imageList.map(image => (
      <div
        className={`${className}__media-slide PromotionCard__media-slide`}
        style={{ backgroundImage: `url("${image}")` }}
        key={`slider-${image}`}
      />
    ))}
  </SwipeableViews>
)

const PromotionCard = ({
  bodyText,
  button,
  buttonText,
  captionText,
  children,
  className,
  deviceBreakpoint,
  imageList,
  imageTitle,
  onButtonClick,
  subtitleText,
  titleText,
  width,
}) => (
  <Card className={`${className} PromotionCard`}>
    <CardMedia image={imageList[0]} component={() => createSwipeView(className, imageList)} />
    <CardContent>
      <Typography gutterBottom color="textSecondary">
        {captionText}
      </Typography>
      <Typography gutterBottom variant="headline" component="h2">
        {titleText}
      </Typography>
      {width < deviceBreakpoint ? (
        <Typography color="textSecondary">{subtitleText}</Typography>
      ) : (
        <Typography gutterBottom component="p">
          {bodyText}
        </Typography>
      )}
      {children && children}
    </CardContent>
    {button && (
      <CardActions>
        <Button size="small" color="primary" variant="raised" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </CardActions>
    )}
  </Card>
)

PromotionCard.defaultProps = {
  bodyText: "",
  button: false,
  buttonText: "Learn More",
  captionText: "",
  className: "",
  imageList: [],
  imageTitle: "",
  onButtonClick: () => {},
  subtitleText: "",
  titleText: "",
}

PromotionCard.propTypes = {
  bodyText: PropTypes.string,
  button: PropTypes.bool,
  buttonText: PropTypes.string,
  captionText: PropTypes.string,
  className: PropTypes.string,
  imageList: PropTypes.array,
  imageTitle: PropTypes.string,
  onButtonClick: PropTypes.func,
  subtitleText: PropTypes.string,
  titleText: PropTypes.string,
}

function mapStateToProps(state) {
  return {
    width: state.app.width,
    deviceBreakpoint: state.app.deviceBreakpoint,
  }
}

export default connect(mapStateToProps, null)(PromotionCard)

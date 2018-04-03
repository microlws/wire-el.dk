import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card"
import SwipeableViews from "react-swipeable-views"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import getDeviceImage from "util/getDeviceImage"
import "./index.css"

const createMediaViewInner = (className, image, aspectRatio, width) => (
  <div
    className={`${className}__media-slide PromotionCard__media-slide`}
    style={{ backgroundImage: `url("${getDeviceImage(image, width)}")`, paddingTop: `${aspectRatio}%` }}
    key={`slider-${image}`}
  />
)

const createMediaView = (className, imageList, mediaAspect, width) => {
  let mediaView
  const aspectRatio = 9 / mediaAspect * 100

  if (imageList.length > 1) {
    mediaView = (
      <SwipeableViews enableMouseEvents className={`${className}__media PromotionCard__media`}>
        {imageList.map(image => createMediaViewInner(className, image, aspectRatio, width))}
      </SwipeableViews>
    )
  } else {
    mediaView = createMediaViewInner(className, imageList[0], aspectRatio)
  }

  return mediaView
}

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
  mediaAspect,
  onButtonClick,
  subtitleText,
  titleText,
  width,
}) => (
  <Card className={`${className} PromotionCard`}>
    <CardMedia
      image={getDeviceImage(imageList[0], width)}
      component={() => createMediaView(className, imageList, mediaAspect, width)}
    />
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
  mediaAspect: 16,
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
  mediaAspect: PropTypes.number,
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

import React from "react"
import { connect } from "react-redux"
import Button from "material-ui/Button"
import Phone from "material-ui-icons/Phone"
import Email from "material-ui-icons/Email"
import "./index.css"

const AppHeader = props => (
  <div className="AppHeader">
    <div className="AppHeader__brand">
      <div className="AppHeader__logo" />
      <div className="AppHeader__title">
        <div className="AppHeader__title-company">Wire</div>
        <div className="AppHeader__title-slogan">El-Installation</div>
      </div>
    </div>
    <div className="AppHeader__info">
      <Button
        aria-label="Ring til +45 22 31 99 30"
        size={props.width > props.deviceBreakpoint ? "medium" : "small"}
        role="link"
        href="tel://+4522319930"
        className="AppHeader__button"
        variant="flat"
        color="primary"
      >
        <Phone className="AppHeader__button-icon" />
        {props.width > props.deviceBreakpoint && "+45 22 31 99 30"}
      </Button>
      <Button
        aria-label="Send mail til mail@wire-el.dk"
        size={props.width > props.deviceBreakpoint ? "medium" : "small"}
        role="link"
        href="mailto:mail@wire-el.dk"
        className="AppHeader__button"
        variant="flat"
        color="primary"
      >
        <Email className="AppHeader__button-icon" />
        {props.width > props.deviceBreakpoint && "mail@wire-el.dk"}
      </Button>
    </div>
  </div>
)

function mapStateToProps(state) {
  return {
    width: state.app.width,
    deviceBreakpoint: state.app.deviceBreakpoint,
  }
}

export default connect(mapStateToProps, null)(AppHeader)

import React from "react"
import { connect } from "react-redux"
import Tabs, { Tab } from "material-ui/Tabs"
import history from "store/history"
import "./index.css"

const navigateTo = pathname => {
  history.push(pathname)
}

const AppNavigation = props => (
  <Tabs className="AppNavigation" value={props.pathname} indicatorColor="primary" textColor="primary">
    <Tab label="Forside" value="/" onClick={() => navigateTo("/")} />
    <Tab label="Services" value="/services" onClick={() => navigateTo("/services")} />
    <Tab label="Tilbud" value="/tilbud" onClick={() => navigateTo("/tilbud")} />
    <Tab label="Kontakt" value="/kontakt" onClick={() => navigateTo("/kontakt")} />
  </Tabs>
)

function mapStateToProps(state) {
  return {
    pathname: state.router.location.pathname,
  }
}

export default connect(mapStateToProps, null)(AppNavigation)
